window.initScrollAnimations = function () {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "-50px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-in');
                entry.target.classList.remove('scroll-out', 'opacity-0', 'translate-y-10');
            } else {
                entry.target.classList.add('scroll-out');
                entry.target.classList.remove('scroll-in', 'opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
        animatedElements.forEach(el => observer.unobserve(el));
    };
};

let scheduledAnimation = false;
window.addEventListener('scroll', () => {
    if (!scheduledAnimation) {
        scheduledAnimation = true;
        requestAnimationFrame(() => {
            scheduledAnimation = false;
        });
    }
}, { passive: true });
