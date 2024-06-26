using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<Result<List<Activity>>> {}

        public class Handler : IRequestHandler<Query, Result<List<Activity>>>
        {
            public readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            async Task<Result<List<Activity>>> IRequestHandler<Query, Result<List<Activity>>>.Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Activity>>.Success(await _context.Activities.ToListAsync());
            }

        }
    }
}