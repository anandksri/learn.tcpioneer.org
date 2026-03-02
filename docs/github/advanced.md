# Advanced Concepts

## Init Command

init → used to create a new git repo

```
git init
git remote add origin <link>
git remote -v
git branch
git branch -M main
git push origin main
```

---

## Workflow

working directory → staging area → local repo → remote repo

---

## Undoing Changes

case 1: staged changes

```
git reset <file name>
git reset
```

case 2: committed changes (one commit)

```
git reset HEAD~1
```

case 3: committed changes (many commits)

```
git reset <commit hash>
git reset --hard <commit hash>
```

---

## Logs

git log  
log = history

---

## Fork

A fork is a new repo that shares code with the original repo

Fork is a rough copy

---

## Extra Concepts

### .gitignore

used to ignore files (node_modules, .env)

---

### Staging Area

middle step between working directory and commit

---

### HEAD

pointer to current commit

---

### Origin

default name of remote repo

---

### Main vs Master

main → new default  
master → old naming

---

## Simple Flow

1. create file
2. git add
3. git commit
4. git push
