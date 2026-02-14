---
title: .NET CLI
tags: [csharp, dotnet, backend, microsoft]
---

# .NET CLI Cheatsheet

## 🆕 Project Creation

| Command | Description |
|---------|-------------|
| `dotnet new list` | List available templates |
| `dotnet new console` | Create a new console application |
| `dotnet new webapi` | Create a new Web API project |
| `dotnet new mvc` | Create a new ASP.NET Core MVC project |
| `dotnet new classlib` | Create a new class library |
| `dotnet new sln` | Create a new solution file |
| `dotnet sln add <project>` | Add a project to the solution |

## 🔨 Build & Run

| Command | Description |
|---------|-------------|
| `dotnet restore` | Restore dependencies |
| `dotnet build` | Build the project |
| `dotnet run` | Run the project (from source) |
| `dotnet watch run` | Run with hot reload (restarts on change) |
| `dotnet clean` | Clean build outputs |
| `dotnet publish` | Publish explicitly for deployment |

## 🧪 Testing

| Command | Description |
|---------|-------------|
| `dotnet test` | Run unit tests |
| `dotnet test --filter <name>` | Run specific tests by name |
| `dotnet test --logger trx` | Run tests and log results to trx file |

## 📦 NuGet Packages

| Command | Description |
|---------|-------------|
| `dotnet add package <name>` | Install a NuGet package |
| `dotnet remove package <name>` | Remove a NuGet package |
| `dotnet list package` | List installed packages |
| `dotnet outdated` | List outdated packages |

## 🛠️ EF Core (requires tool installed)

| Command | Description |
|---------|-------------|
| `dotnet tool install --global dotnet-ef` | Install EF Core tools globally |
| `dotnet ef migrations add <name>` | Add a new migration |
| `dotnet ef database update` | Apply migrations to database |
| `dotnet ef migrations remove` | Remove last migration |

---
*Run anywhere, build anything*
