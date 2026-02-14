# Windows Cheatsheet

## Command Line (PowerShell / CMD)

### File System
- `ls` / `dir`: List directory contents
- `cd <directory>`: Change directory
- `mkdir <name>`: Create a new directory
- `rm <file>` / `del <file>`: Remove a file
- `rm -r <directory>` / `rd /s <directory>`: Remove a directory recursively
- `cp <source> <dest>` / `copy <source> <dest>`: Copy a file
- `mv <source> <dest>` / `move <source> <dest>`: Move or rename a file
- `type <file>` / `cat <file>`: Display file contents
- `echo <text>`: Print text to stdout
- `ni <file>` / `New-Item <file>`: Create a new file (PowerShell)

### Network
- `ipconfig`: Display IP configuration
- `ping <host>`: Test connectivity to a host
- `tracert <host>`: Trace route to a host
- `netstat -an`: Show active network connections
- `nslookup <domain>`: Query DNS for a domain

### System
- `systeminfo`: detailed system configuration information
- `tasklist`: List running processes
- `taskkill /PID <pid>`: Kill a process by ID
- `shutdown /s`: Shutdown the computer
- `shutdown /r`: Restart the computer
- `cls` / `clear`: Clear the terminal screen

## Keyboard Shortcuts

### Window Management
- **Win + Arrow Keys**: Snap active window to sides/corners
- **Win + Shift + Arrow Keys**: Move active window to another monitor
- **Win + D**: Show Desktop / Minimize all
- **Win + M**: Minimize all windows
- **Win + Shift + M**: Restore minimized windows
- **Alt + Tab**: Switch between open apps
- **Win + Tab**: Open Task View
- **Win + Home**: Minimize all but the active window

### System
- **Win + E**: Open File Explorer
- **Win + R**: Open Run dialog
- **Win + X**: Open Quick Link menu
- **Win + I**: Open Settings
- **Win + L**: Lock your PC
- **Win + S** / **Win + Q**: Open Search
- **Win + PrtScn**: Capture screenshot to Pictures > Screenshots
- **Win + Shift + S**: Open Snipping Tool
- **Win + .**: Open Emoji Panel
- **Win + V**: Open Clipboard History
- **Ctrl + Shift + Esc**: Open Task Manager

### File Explorer
- **Alt + D**: Select address bar
- **Ctrl + E** / **Ctrl + F**: Select search box
- **Ctrl + N**: Open new window
- **Ctrl + Shift + N**: Create new folder
- **Alt + P**: Show preview pane
- **Alt + Enter**: Open Properties for selected item

## WSL (Windows Subsystem for Linux)
- `wsl`: Enter the default Linux distribution
- `wsl --list`: List installed distributions
- `wsl --install`: Install WSL
- `wsl --shutdown`: Terminate all running distributions
