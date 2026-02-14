---
title: PostgreSQL
tags: [database, sql, backend, postgres]
---

# PostgreSQL Cheatsheet

## 🐘 Connection & Basics

| Command | Description |
|---------|-------------|
| `psql -U <user>` | Connect to default database as user |
| `psql -U <user> -d <db>` | Connect to specific database |
| `psql -h <host> -p <port>` | Connect to remote host/port |
| `\l` | List all databases |
| `\c <db>` | Connect to a database |
| `\du` | List all roles/users |
| `\dt` | List all tables in current db |
| `\d <table>` | Describe table structure |
| `\q` | Quit psql |

## 🗄️ Database Management

| Command | Description |
|---------|-------------|
| `CREATE DATABASE <name>;` | Create a new database |
| `DROP DATABASE <name>;` | Delete a database |
| `ALTER DATABASE <old> RENAME TO <new>;` | Rename a database |
| `SELECT pg_size_pretty(pg_database_size('db'));` | Check database size |

## 👤 User Management

| Command | Description |
|---------|-------------|
| `CREATE USER <name> WITH PASSWORD 'pw';` | Create a new user |
| `ALTER USER <name> WITH PASSWORD 'pw';` | Change user password |
| `DROP USER <name>;` | Delete a user |
| `GRANT ALL PRIVILEGES ON DATABASE <db> TO <user>;` | Grant full access |

## 📋 Table Operations

| Command | Description |
|---------|-------------|
| `CREATE TABLE <table> (id SERIAL PRIMARY KEY);` | Create a table |
| `DROP TABLE <table>;` | Delete a table |
| `TRUNCATE TABLE <table>;` | Empty a table (keep structure) |
| `ALTER TABLE <table> ADD COLUMN <col> <type>;` | Add a column |
| `ALTER TABLE <table> DROP COLUMN <col>;` | Remove a column |

## 🔍 Data Manipulation

| Command | Description |
|---------|-------------|
| `SELECT * FROM <table>;` | Select all rows |
| `INSERT INTO <table> (col) VALUES (val);` | Insert row |
| `UPDATE <table> SET col=val WHERE id=1;` | Update row |
| `DELETE FROM <table> WHERE id=1;` | Delete row |

---
*The world's most advanced open source relational database*
