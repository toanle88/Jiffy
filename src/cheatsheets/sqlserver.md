---
title: SQL Server
tags: [database, sql, backend, microsoft]
---

# SQL Server Cheatsheet

## 🔌 Connection & Tools

| Command | Description |
|---------|-------------|
| `sqlcmd -S <server> -U <user> -P <pass>` | Connect via sqlcmd |
| `sqlcmd -S localhost -E` | Connect with Windows auth |
| `SELECT @@VERSION;` | Check SQL Server version |
| `SELECT DB_NAME();` | Show current database |
| `USE <database>;` | Switch database |

## 🗄️ Database Management

| Command | Description |
|---------|-------------|
| `CREATE DATABASE <name>;` | Create a new database |
| `DROP DATABASE <name>;` | Delete a database |
| `ALTER DATABASE <name> SET SINGLE_USER WITH ROLLBACK IMMEDIATE;` | Force single-user mode |
| `EXEC sp_databases;` | List all databases |
| `EXEC sp_helpdb '<name>';` | Show database details |

## 📋 Table Operations

| Command | Description |
|---------|-------------|
| `CREATE TABLE <t> (Id INT IDENTITY PRIMARY KEY);` | Create table with identity |
| `DROP TABLE <table>;` | Delete a table |
| `TRUNCATE TABLE <table>;` | Empty a table (keep structure) |
| `ALTER TABLE <t> ADD <col> <type>;` | Add a column |
| `ALTER TABLE <t> DROP COLUMN <col>;` | Remove a column |
| `EXEC sp_help '<table>';` | Describe table structure |
| `EXEC sp_columns '<table>';` | List table columns |

## 🔍 Querying

| Command | Description |
|---------|-------------|
| `SELECT TOP 10 * FROM <table>;` | Select first 10 rows |
| `SELECT * FROM <t> ORDER BY col OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY;` | Pagination |
| `INSERT INTO <t> (col) VALUES (val);` | Insert row |
| `UPDATE <t> SET col=val WHERE id=1;` | Update row |
| `DELETE FROM <t> WHERE id=1;` | Delete row |
| `MERGE INTO <target> USING <source> ON ...` | Upsert (insert or update) |

## 🔐 Users & Permissions

| Command | Description |
|---------|-------------|
| `CREATE LOGIN <name> WITH PASSWORD = 'pw';` | Create a server login |
| `CREATE USER <name> FOR LOGIN <login>;` | Create a database user |
| `ALTER ROLE db_datareader ADD MEMBER <user>;` | Grant read access |
| `ALTER ROLE db_datawriter ADD MEMBER <user>;` | Grant write access |
| `GRANT EXECUTE TO <user>;` | Grant execute on stored procs |

## 🛠️ Useful Queries

| Command | Description |
|---------|-------------|
| `EXEC sp_who2;` | Show active connections |
| `SELECT * FROM sys.tables;` | List all tables |
| `SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME='t';` | Show columns for table |
| `DBCC CHECKDB;` | Check database integrity |
| `BACKUP DATABASE <db> TO DISK = 'path';` | Backup database |

---
*Built for enterprise data*
