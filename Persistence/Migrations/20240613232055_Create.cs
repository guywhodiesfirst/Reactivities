using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Create : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.CreateTable(
                name: "Activities",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Title = table.Column<string>(type: "TEXT", nullable: true),
                    Date = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: true),
                    Category = table.Column<string>(type: "TEXT", nullable: true),
                    City = table.Column<string>(type: "TEXT", nullable: true),
                    Venue = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Activities", x => x.Id);
                });

            // migrationBuilder.InsertData(
            //     table: "Activities",
            //     columns: new[] { "Id", "Category", "City", "Date", "Description", "Title", "Venue" },
            //     values: new object[,]
            //     {
            //         { new Guid("11ba1e85-67a1-4afd-a9a9-58fbe8e05988"), "travel", "London", new DateTime(2025, 1, 13, 23, 20, 54, 924, DateTimeKind.Utc).AddTicks(9206), "Activity 2 months ago", "Future Activity 7", "Somewhere on the Thames" },
            //         { new Guid("2f26c54b-c7b9-45be-ad35-f7ae87eac107"), "drinks", "London", new DateTime(2024, 10, 13, 23, 20, 54, 924, DateTimeKind.Utc).AddTicks(9175), "Activity 4 months in future", "Future Activity 4", "Yet another pub" },
            //         { new Guid("5e2dca1b-591f-4834-9e7a-df1c640becd7"), "drinks", "London", new DateTime(2024, 9, 13, 23, 20, 54, 924, DateTimeKind.Utc).AddTicks(9172), "Activity 3 months in future", "Future Activity 3", "Another pub" },
            //         { new Guid("a42f92f6-373c-4575-9575-c8868d4ef733"), "film", "London", new DateTime(2025, 2, 13, 23, 20, 54, 924, DateTimeKind.Utc).AddTicks(9210), "Activity 8 months in future", "Future Activity 8", "Cinema" },
            //         { new Guid("a7300a49-c328-4af7-b5b7-6f57c283f809"), "drinks", "London", new DateTime(2024, 11, 13, 23, 20, 54, 924, DateTimeKind.Utc).AddTicks(9179), "Activity 5 months in future", "Future Activity 5", "Just another pub" },
            //         { new Guid("a73ce9ba-beb9-4013-9056-1f3f283a8878"), "drinks", "London", new DateTime(2024, 4, 13, 23, 20, 54, 924, DateTimeKind.Utc).AddTicks(9145), "Activity 2 months ago", "Past Activity 1", "Pub" },
            //         { new Guid("add9c315-b081-46e8-97a5-422a19144fc7"), "music", "London", new DateTime(2024, 8, 13, 23, 20, 54, 924, DateTimeKind.Utc).AddTicks(9168), "Activity 2 months in future", "Future Activity 2", "O2 Arena" },
            //         { new Guid("bc531442-2603-4171-b814-de35a511407b"), "music", "London", new DateTime(2024, 12, 13, 23, 20, 54, 924, DateTimeKind.Utc).AddTicks(9202), "Activity 6 months in future", "Future Activity 6", "Roundhouse Camden" },
            //         { new Guid("fb6ce523-c7e2-4b4c-8dab-0557863805c3"), "culture", "Paris", new DateTime(2024, 5, 13, 23, 20, 54, 924, DateTimeKind.Utc).AddTicks(9159), "Activity 1 month ago", "Past Activity 2", "Louvre" },
            //         { new Guid("fc72132a-80c7-4578-9bff-a515d7b78c57"), "culture", "London", new DateTime(2024, 7, 13, 23, 20, 54, 924, DateTimeKind.Utc).AddTicks(9164), "Activity 1 month in future", "Future Activity 1", "Natural History Museum" }
            //     });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Activities");
        }
    }
}
