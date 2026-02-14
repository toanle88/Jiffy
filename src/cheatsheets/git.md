---
title: Git
tags: [vcs, devops, source-control]
---

# Git Cheatsheet

## 🚀 Setup & Init

| Command | Description |
|---------|-------------|
| `git init` | Initialize a new git repository |
| `git clone <url>` | Clone a repository |
| `git config --global user.name "Name"` | Set global username |
| `git config --global user.email "email"` | Set global email |

## 📝 Staging & Committing

| Command | Description |
|---------|-------------|
| `git status` | Check status of working directory |
| `git add <file>` | Add file to staging area |
| `git add .` | Add all files to staging area |
| `git commit -m "msg"` | Commit changes with message |
| `git commit --amend` | Amend the last commit |

## 🌿 Branching & Merging

| Command | Description |
|---------|-------------|
| `git branch` | List local branches |
| `git branch <name>` | Create a new branch |
| `git checkout <name>` | Switch to a branch |
| `git switch <name>` | Switch to a branch (newer syntax) |
| `git checkout -b <name>` | Create and switch to new branch |
| `git merge <branch>` | Merge branch into current branch |
| `git branch -d <name>` | Delete a branch |

## 🔄 Remote Operations

| Command | Description |
|---------|-------------|
| `git remote -v` | List remote URLs |
| `git fetch` | Download objects and refs from remote |
| `git pull` | Fetch and merge from remote |
| `git push` | Push local changes to remote |
| `git push -u origin <branch>` | Push and set upstream |

## ↩️ Undoing Changes

| Command | Description |
|---------|-------------|
| `git checkout -- <file>` | Discard local changes in file |
| `git reset HEAD <file>` | Unstage a file |
| `git reset --soft HEAD~1` | Undo last commit, keep changes staged |
| `git reset --hard HEAD~1` | Undo last commit, discard changes |
| `git revert <commit>` | Create new commit reversing changes |

## 📜 Log & Diff

| Command | Description |
|---------|-------------|
| `git log` | Show commit history |
| `git log --oneline` | Show concise commit history |
| `git diff` | Show unstaged changes |
| `git diff --staged` | Show staged changes |

---
*Keep calm and git commit*
