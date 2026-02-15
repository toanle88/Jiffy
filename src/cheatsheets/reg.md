---
title: Regular Expressions Cheatsheet
tags: [regex, regular-expressions, pattern-matching, text-processing]
---

# Regular Expressions Cheatsheet

## 🔑 Basic Syntax

| Element | Meaning | Example |
|---------|---------|---------|
| `.` | Any single character except newline | `a.c` matches "abc", "a1c" |
| `*` | Zero or more of preceding element | `ab*c` matches "ac", "abc", "abbc" |
| `+` | One or more of preceding element | `ab+c` matches "abc", "abbc" |
| `?` | Zero or one of preceding element | `ab?c` matches "ac", "abc" |
| `^` | Start of string | `^hello` matches "hello" at start |
| `$` | End of string | `world$` matches "world" at end |
| `\|` | Alternation (or) | `cat\|dog` matches "cat" or "dog" |
| `()` | Grouping | `(ab)+` matches "ab", "abab" |
| `[]` | Character class | `[abc]` matches "a", "b", or "c" |
| `[^]` | Negated class | `[^abc]` matches any char except a, b, c |
| `\` | Escape special char | `\.` matches literal period |

---

## 📋 Character Classes

| Syntax | Meaning | Example |
|--------|---------|---------|
| `[abc]` | Match any of a, b, c | `[aeiou]` matches vowels |
| `[a-z]` | Range from a to z | `[0-9]` matches digits |
| `[^abc]` | NOT a, b, or c | `[^0-9]` matches non-digits |
| `\d` | Digit [0-9] | `\d{3}` matches "123" |
| `\D` | Non-digit [^0-9] | `\D+` matches "abc" |
| `\w` | Word char [a-zA-Z0-9_] | `\w+` matches "hello_123" |
| `\W` | Non-word char | `\W+` matches spaces, symbols |
| `\s` | Whitespace (space, tab, newline) | `\s+` matches multiple spaces |
| `\S` | Non-whitespace | `\S+` matches "hello" |

---

## 🔢 Quantifiers

| Quantifier | Meaning | Example |
|-----------|---------|---------|
| `*` | 0 or more | `a*b` matches "b", "ab", "aab" |
| `+` | 1 or more | `a+b` matches "ab", "aab" (not "b") |
| `?` | 0 or 1 | `a?b` matches "b", "ab" |
| `{n}` | Exactly n times | `a{3}` matches "aaa" |
| `{n,}` | n or more times | `a{2,}` matches "aa", "aaa" |
| `{n,m}` | Between n and m times | `a{2,4}` matches "aa", "aaa", "aaaa" |
| `*?` | Lazy/non-greedy match | `a*?b` matches shortest sequence |
| `+?` | Lazy match (1 or more) | `a+?b` matches minimal match |

---

## 📍 Anchors

| Anchor | Meaning | Example |
|--------|---------|---------|
| `^` | Start of string/line | `^hello` only matches at start |
| `$` | End of string/line | `world$` only matches at end |
| `\b` | Word boundary | `\bhello\b` matches whole word |
| `\B` | Non-word boundary | `\Bhello` matches within word |

### Examples
```regex
^hello$           # Entire string is "hello"
^[A-Z]            # Start with uppercase
\b\w+@\w+\.\w+\b  # Email-like pattern
```

---

## 🎯 Grouping & Capturing

| Syntax | Purpose | Example |
|--------|---------|---------|
| `(pattern)` | Capture group | `(ab)+` captures "ab" multiple times |
| `(?:pattern)` | Non-capturing group | `(?:ab)+` groups without capturing |
| `(?P<name>pattern)` | Named group (Python) | `(?P<year>\d{4})` |
| `\1, \2, etc` | Backreference | `(\w+)\s\1` matches repeated words |

### Examples
```regex
(\d{3})-(\d{3})-(\d{4})  # Capture phone parts
(hello|world)            # Capture either word
(\w+)\s\1               # Repeat same word
```

---

## 🔮 Lookahead & Lookbehind

| Syntax | Type | Example |
|--------|------|---------|
| `(?=pattern)` | Positive lookahead | `foo(?=bar)` matches "foo" preceded by "bar" |
| `(?!pattern)` | Negative lookahead | `foo(?!bar)` matches "foo" NOT followed by "bar" |
| `(?<=pattern)` | Positive lookbehind | `(?<=foo)bar` matches "bar" after "foo" |
| `(?<!pattern)` | Negative lookbehind | `(?<!foo)bar` matches "bar" NOT after "foo" |

### Examples
```regex
\d+(?=px)        # Number followed by "px" (not included)
\w+(?!s)         # Word not followed by "s"
(?<=@)\w+        # Text after "@" sign
(?<!http)\S+     # URL without "http" prefix
```

---

## 🚩 Flags

| Flag | Meaning | Example |
|------|---------|---------|
| `i` | Case-insensitive | `/hello/i` matches "Hello", "HELLO" |
| `g` | Global (all matches) | `/\d+/g` finds all numbers |
| `m` | Multiline (^ & $ per line) | `/^start/m` matches start of each line |
| `s` | Dot matches newline | `/a.b/s` matches "a\nb" |
| `x` | Verbose (ignore spaces) | `/a b/x` ignores space |

### JavaScript Examples
```javascript
/hello/i          // Case-insensitive
/\d+/g            // Global flag
/^start/m         // Multiline
```

---

## 💡 Common Patterns

### Email
```regex
[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}
```

### URL
```regex
https?://[^\s]+
```

### Phone Number
```regex
(\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}
```

### Date (MM/DD/YYYY)
```regex
(0[1-9]|1[0-2])/(0[1-9]|[12]\d|3[01])/\d{4}
```

### IPv4 Address
```regex
\b(?:\d{1,3}\.){3}\d{1,3}\b
```

### Hex Color
```regex
#?[0-9A-Fa-f]{6}\b
```

### Password (8+ chars, uppercase, lowercase, digit)
```regex
^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$
```

### Username (alphanumeric, underscore, 3-16 chars)
```regex
^[a-zA-Z0-9_]{3,16}$
```

### Whole Words Only
```regex
\b\w+\b
```

---

*Created with ❤️ for Pattern Matchers and Text Processors*
