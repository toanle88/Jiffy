---
title: Linux
tags: [os, system, devops, bash]
---

# Linux Cheatsheet

## 📂 File Operations

| Command | Description |
|---------|-------------|
| `ls -la` | List all files with details (including hidden) |
| `cd <dir>` | Change directory |
| `mkdir -p <dir>` | Create directory (and parents if needed) |
| `rm -rf <path>` | Force remove file/directory (Recursive) |
| `cp -r <src> <dest>` | Copy file or directory recursively |
| `mv <src> <dest>` | Move or rename file/directory |
| `touch <file>` | Create empty file or update timestamp |
| `find . -name <pattern>` | Find files by name in current directory |
| `grep -r "text" <path>` | Search for text recursively in files |

## 🔒 Permissions & Ownership

| Command | Description |
|---------|-------------|
| `chmod 755 <file>` | Set permissions (rwx for owner, rx for others) |
| `chmod +x <file>` | Make file executable |
| `chown <user>:<group> <file>` | Change ownership |
| `sudo <command>` | Run command as superuser (root) |

## 🖥️ System Information

| Command | Description |
|---------|-------------|
| `uname -a` | Show kernel and system info |
| `df -h` | Show disk space usage (human readable) |
| `du -sh <dir>` | Show size of specific directory |
| `free -h` | Show memory usage |
| `top` / `htop` | Monitor system processes and resources |
| `uptime` | Show system uptime |

## 🌐 Networking

| Command | Description |
|---------|-------------|
| `ip addr` | Show network interfaces and IP addresses |
| `ping <host>` | Check connectivity to host |
| `curl <url>` | Transfer data from/to a server |
| `wget <url>` | Download file from internet |
| `netstat -tulpn` | Show listening ports and processes |
| `ssh <user>@<host>` | Secure Shell into remote host |

## ⚙️ Process Management

| Command | Description |
|---------|-------------|
| `ps aux` | List all running processes |
| `kill <pid>` | Kill process by ID |
| `killall <name>` | Kill processes by name |
| `systemctl start <service>` | Start a service |
| `systemctl status <service>` | Check service status |
| `journalctl -u <service>` | View logs for a specific service |

## 📦 Archives & Compressions

| Command | Description |
|---------|-------------|
| `tar -czvf <name>.tar.gz <dir>` | Create a gzip compressed tarball |
| `tar -xzvf <name>.tar.gz` | Extract a gzip compressed tarball |
| `zip -r <name>.zip <dir>` | Create a zip archive |
| `unzip <name>.zip` | Extract a zip archive |

---
*Powered by the Penguin* 🐧
