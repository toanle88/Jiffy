---
title: Python
tags: [programming, scripting, backend]
---

# Python Cheatsheet

## 🐍 Basics & Syntax

| Concept | Syntax/Example |
|---------|----------------|
| **Print** | `print("Hello, World!")` |
| **Variables** | `x = 5`, `name = "Alice"` |
| **Data Types** | `int`, `float`, `str`, `bool`, `list`, `dict` |
| **Comments** | `# This is a comment` |
| **Input** | `name = input("Enter name: ")` |
| **F-Strings** | `print(f"Hello {name}")` |

---

## 🏗️ Data Structures

### List Methods
| Method | Description |
|--------|-------------|
| `list.append(x)` | Add item to end |
| `list.extend(L)` | Add all items from list L |
| `list.insert(i, x)` | Insert item at index |
| `list.remove(x)` | Remove first item with value x |
| `list.pop([i])` | Remove & return item at index |
| `list.sort()` | Sort list in place |
| `list.reverse()` | Reverse list in place |

### Dictionary Methods
| Method | Description |
|--------|-------------|
| `dict.get(k)` | Return value for key k |
| `dict.keys()` | Return view of keys |
| `dict.values()` | Return view of values |
| `dict.items()` | Return view of (key, value) pairs |
| `dict.update(d)` | Update dict with other dict d |
| `dict.pop(k)` | Remove & return value for key k |

---

## 🧵 String Manipulation

| Method | Description |
|--------|-------------|
| `s.lower()`, `s.upper()` | Change case |
| `s.strip()` | Remove whitespace |
| `s.split(sep)` | Split string into list |
| `s.join(list)` | Join list into string |
| `s.replace(old, new)` | Replace substring |
| `s.startswith(x)` | Check prefix |
| `s.find(sub)` | Find index of substring |
| `s[start:end]` | Slice string |

---

## 🔀 Control Flow

### If / Else
```python
if x > 10:
    print("Greater than 10")
elif x == 10:
    print("Equal to 10")
else:
    print("Less than 10")
```

### Loops
```python
# For Loop
for i in range(5):
    print(i)

# While Loop
while x > 0:
    x -= 1
```

### List Comprehension
```python
squares = [x**2 for x in range(10)]
evens = [x for x in range(10) if x % 2 == 0]
```

---

## 📦 Virtual Environments (venv)

| Command | Description |
|---------|-------------|
| `python -m venv venv` | Create virtual env |
| `source venv/bin/activate` | Activate (Mac/Linux) |
| `venv\Scripts\activate` | Activate (Windows) |
| `deactivate` | Deactivate env |
| `pip install -r requirements.txt` | Install dependencies |
| `pip freeze > requirements.txt` | Save dependencies |

---
*Created with ❤️ for Pythonistas*
