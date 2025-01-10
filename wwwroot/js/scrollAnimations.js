// Declare prevScrollPos globally only once
let prevScrollPos = window.scrollY;

window.initScrollAnimations = function () {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "-50px 0px -50px 0px"
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const currentScrollPos = window.scrollY;
            const scrollingDown = currentScrollPos > prevScrollPos;
            if (entry.isIntersecting) {
                entry.target.classList.remove('scroll-out');
                entry.target.classList.add('scroll-in');
                entry.target.classList.remove('opacity-0');
                entry.target.classList.remove('translate-y-10');
            } else {
                if (!scrollingDown && entry.boundingClientRect.top < 0) {
                    entry.target.classList.remove('scroll-in');
                    entry.target.classList.add('scroll-out');
                }
            }
            // Update prevScrollPos without redeclaring
            prevScrollPos = currentScrollPos;
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    return () => {
        animatedElements.forEach(el => observer.unobserve(el));
    };
};

// Update prevScrollPos during the scroll event without redeclaring
window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY;
    prevScrollPos = currentScrollPos;
}, { passive: true });
