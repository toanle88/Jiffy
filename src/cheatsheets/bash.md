---
title: Bash Cheatsheet
tags: [bash, shell, linux, scripting, command-line]
---

# Bash Cheatsheet

## 🔑 File Operations

| Command | Description |
|---------|-------------|
| `ls` | List directory contents |
| `ls -la` | List with hidden files and details |
| `ls -lh` | List with human-readable sizes |
| `cd directory` | Change directory |
| `cd ..` | Go to parent directory |
| `pwd` | Print working directory |
| `mkdir folder` | Create directory |
| `mkdir -p path/to/folder` | Create nested directories |
| `rmdir folder` | Remove empty directory |
| `rm file` | Delete file |
| `rm -r folder` | Delete directory and contents |
| `rm -f file` | Force delete without confirmation |
| `cp source dest` | Copy file |
| `cp -r source dest` | Copy directory recursively |
| `mv source dest` | Move or rename file |
| `touch file` | Create empty file or update timestamp |
| `find . -name "*.txt"` | Find files matching pattern |
| `stat file` | Show file details and metadata |

---

## 📝 Text Processing

### grep
```bash
grep "pattern" file.txt          # Search for pattern in file
grep -i "pattern" file.txt       # Case-insensitive search
grep -n "pattern" file.txt       # Show line numbers
grep -r "pattern" directory      # Search recursively
grep -v "pattern" file.txt       # Invert match (exclude)
grep -c "pattern" file.txt       # Count matches
```

### sed (Stream Editor)
```bash
sed 's/old/new/' file.txt        # Replace first occurrence
sed 's/old/new/g' file.txt       # Replace all occurrences
sed '5d' file.txt                # Delete line 5
sed '1,5d' file.txt              # Delete lines 1-5
sed -n '5p' file.txt             # Print only line 5
```

### awk
```bash
awk '{print $1}' file.txt        # Print first column
awk -F: '{print $1}' file.txt    # Use colon as delimiter
awk '{sum += $1} END {print sum}' file.txt  # Sum column
```

### Other Tools
```bash
cat file.txt                     # Display file contents
wc -l file.txt                   # Count lines
wc -w file.txt                   # Count words
sort file.txt                    # Sort lines
sort -u file.txt                 # Sort and remove duplicates
uniq file.txt                    # Remove consecutive duplicates
cut -d: -f1 file.txt             # Extract column by delimiter
```

---

## 🔀 Pipes & Redirection

| Operator | Description |
|----------|-------------|
| `\|` | Pipe output to next command |
| `>` | Redirect output to file (overwrite) |
| `>>` | Append output to file |
| `<` | Redirect file as input |
| `2>` | Redirect errors to file |
| `2>&1` | Redirect errors to stdout |
| `&>` | Redirect all output (stdout + stderr) |
| `\|&` | Pipe both stdout and stderr |

### Examples
```bash
cmd1 | cmd2                      # Pipe output of cmd1 to cmd2
ls > output.txt                  # Save output to file
ls >> output.txt                 # Append output to file
cat < input.txt                  # Use file as input
cmd 2> errors.txt                # Redirect errors to file
cmd &> all_output.txt            # Redirect all output
```

---

## 🎯 Control Flow

### If Statement
```bash
if [ $x -eq 5 ]; then
  echo "x is 5"
elif [ $x -gt 5 ]; then
  echo "x is greater than 5"
else
  echo "x is less than 5"
fi
```

### Test Operators
| Operator | Meaning |
|----------|---------|
| `-eq` | Equal |
| `-ne` | Not equal |
| `-lt` | Less than |
| `-le` | Less than or equal |
| `-gt` | Greater than |
| `-ge` | Greater than or equal |
| `-z` | String is empty |
| `-n` | String is not empty |
| `-f` | File exists |
| `-d` | Directory exists |

### For Loop
```bash
for i in 1 2 3 4 5; do
  echo $i
done

for file in *.txt; do
  echo $file
done
```

### While Loop
```bash
while [ $count -lt 10 ]; do
  echo $count
  ((count++))
done
```

### Case Statement
```bash
case $var in
  option1) echo "option 1" ;;
  option2) echo "option 2" ;;
  *) echo "unknown" ;;
esac
```

---

## 🔧 Functions

```bash
function greet() {
  echo "Hello, $1!"
}

# Or shorthand
greet() {
  echo "Hello, $1!"
}

greet "World"

# With return value
add() {
  return $(($1 + $2))
}

add 5 3
echo $?  # Print return value
```

---

## 💬 Command Substitution & Expansion

| Syntax | Description |
|--------|-------------|
| `` `command` `` | Execute command and substitute output |
| `$(command)` | Modern syntax for command substitution |
| `$((expression))` | Arithmetic expansion |
| `${variable}` | Variable expansion |
| `${variable:-default}` | Use default if variable unset |
| `${variable#pattern}` | Remove pattern from start |
| `${variable%pattern}` | Remove pattern from end |

### Examples
```bash
current_date=$(date)
files=$(ls *.txt)
result=$((5 + 3))
name=${1:-"defaultname"}
```

---

## 🧵 String Manipulation

| Operation | Syntax |
|-----------|--------|
| **Concatenation** | `"Hello $name"` or `$str1$str2` |
| **Length** | `${#string}` |
| **Substring** | `${string:0:5}` (start:length) |
| **Replace** | `${string/old/new}` |
| **Replace All** | `${string//old/new}` |
| **Convert to Uppercase** | `${string^^}` (Bash 4+) |
| **Convert to Lowercase** | `${string,,}` (Bash 4+) |

### Examples
```bash
str="Hello World"
echo ${#str}              # String length
echo ${str:0:5}           # "Hello"
echo ${str/World/Bash}    # "Hello Bash"
```

---

## 🚀 Useful Commands

| Command | Purpose |
|---------|---------|
| `echo "text"` | Print text |
| `date` | Show current date/time |
| `cal` | Show calendar |
| `whoami` | Current user |
| `which command` | Find command path |
| `man command` | Show command manual |
| `history` | Show command history |
| `!!` | Repeat last command |
| `sudo command` | Run as superuser |
| `chmod +x file` | Make file executable |
| `tar -czf archive.tar.gz folder` | Create compressed archive |
| `tar -xzf archive.tar.gz` | Extract archive |
| `curl url` | Fetch URL content |
| `wget url` | Download file |
| `ps aux` | List all processes |
| `kill PID` | Terminate process |
| `top` | Monitor system resources |
| `df -h` | Show disk usage |
| `du -sh folder` | Show folder size |

---

*Created with ❤️ for DevOps and System Administrators*
