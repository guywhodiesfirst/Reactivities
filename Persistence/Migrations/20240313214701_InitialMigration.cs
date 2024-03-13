using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "__EFMigrationsHistory",
                columns: table => new
                {
                    MigrationId = table.Column<string>(nullable: false),
                    ProductVersion = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK___EFMigrationsHistory", x => x.MigrationId);
                }
            );
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

            migrationBuilder.InsertData(
                table: "Activities",
                columns: new[] { "Id", "Category", "City", "Date", "Description", "Title", "Venue" },
                values: new object[,]
                {
                    { new Guid("02c830b3-19d6-4548-87ec-ad28817fc27b"), "film", "London", new DateTime(2024, 11, 13, 21, 47, 1, 500, DateTimeKind.Utc).AddTicks(8871), "Activity 8 months in future", "Future Activity 8", "Cinema" },
                    { new Guid("5658ebb7-8158-4412-bb27-b87975f15829"), "drinks", "London", new DateTime(2024, 1, 13, 21, 47, 1, 500, DateTimeKind.Utc).AddTicks(8836), "Activity 2 months ago", "Past Activity 1", "Pub" },
                    { new Guid("6f821604-6c92-4ee3-b40b-00be398d9d2b"), "culture", "London", new DateTime(2024, 4, 13, 21, 47, 1, 500, DateTimeKind.Utc).AddTicks(8848), "Activity 1 month in future", "Future Activity 1", "Natural History Museum" },
                    { new Guid("7945e681-5bd7-43f4-8330-9a00cc8b30e3"), "music", "London", new DateTime(2024, 9, 13, 21, 47, 1, 500, DateTimeKind.Utc).AddTicks(8867), "Activity 6 months in future", "Future Activity 6", "Roundhouse Camden" },
                    { new Guid("80c0c095-1b93-4386-aa2f-d8a060404a46"), "culture", "Paris", new DateTime(2024, 2, 13, 21, 47, 1, 500, DateTimeKind.Utc).AddTicks(8845), "Activity 1 month ago", "Past Activity 2", "Louvre" },
                    { new Guid("a7c058ad-e2a2-4a28-8802-8478277be897"), "travel", "London", new DateTime(2024, 10, 13, 21, 47, 1, 500, DateTimeKind.Utc).AddTicks(8869), "Activity 2 months ago", "Future Activity 7", "Somewhere on the Thames" },
                    { new Guid("d33aa8e4-34ae-41c4-a0c6-4465bb95ca4a"), "drinks", "London", new DateTime(2024, 8, 13, 21, 47, 1, 500, DateTimeKind.Utc).AddTicks(8866), "Activity 5 months in future", "Future Activity 5", "Just another pub" },
                    { new Guid("d7f97a06-b8b5-4947-a46c-46ee8d793983"), "drinks", "London", new DateTime(2024, 7, 13, 21, 47, 1, 500, DateTimeKind.Utc).AddTicks(8863), "Activity 4 months in future", "Future Activity 4", "Yet another pub" },
                    { new Guid("d9cf3989-3a25-4092-910a-5a259f0aac7d"), "music", "London", new DateTime(2024, 5, 13, 21, 47, 1, 500, DateTimeKind.Utc).AddTicks(8850), "Activity 2 months in future", "Future Activity 2", "O2 Arena" },
                    { new Guid("f779069d-f6fc-426c-ba06-21171568f032"), "drinks", "London", new DateTime(2024, 6, 13, 21, 47, 1, 500, DateTimeKind.Utc).AddTicks(8852), "Activity 3 months in future", "Future Activity 3", "Another pub" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "__EFMigrationsHistory");
            migrationBuilder.DropTable(
                name: "Activities");
        }
    }
}
