using Domain;
using FluentValidation;

namespace Application.Activities
{
    public class ActivityValidator : AbstractValidator<Activity>
    {
        public ActivityValidator()
        {
            RuleFor(x => x.Title).NotEmpty().WithMessage("Title field cannot be empty");
            RuleFor(x => x.Description).NotEmpty().WithMessage("Description field cannot be empty");
            RuleFor(x => x.Date).NotEmpty().WithMessage("Date field cannot be empty");
            RuleFor(x => x.Category).NotEmpty().WithMessage("Category field cannot be empty");
            RuleFor(x => x.City).NotEmpty().WithMessage("City field cannot be empty");
            RuleFor(x => x.Venue).NotEmpty().WithMessage("Venue field cannot be empty");
        }
    }
}