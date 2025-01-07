using System.ComponentModel.DataAnnotations;

namespace InnoteksoWeb.Models
{
    public class ContactModel
    {
        [Required(ErrorMessage = "Please enter your first name")]
        public string FirstName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Please enter your last name")]
        public string LastName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Please enter your email")]
        [EmailAddress(ErrorMessage = "Please enter a valid email address")]
        public string Email { get; set; } = string.Empty;

        [RegularExpression(@"^\+?[1-9]\d{1,14}$", ErrorMessage = "Please enter a valid contact number")]
        public string? ContactNumber { get; set; }

        [Required(ErrorMessage = "Please enter your message")]
        [MinLength(20, ErrorMessage = "Please provide more details about your project")]
        public string Message { get; set; } = string.Empty;
    }
}
