# Basic Git Commands

## Clone and Status

clone → cloning a repo on our local machine

```
git clone <link>
```

status → display the state of the code

```
git status
```

---

## Basic Commands

change directory

```
cd
```

list files

```
ls
```

hidden files

```
ls -a
```

---

## Status Types

- untracked → new file that git doesn’t yet track
- modified → changed
- staged → file is ready to be committed
- unmodified → unchanged

---

## Add and Commit

add → adds new or changed files to staging area

```
git add <file name>
```

commit → record of change

```
git commit -m "some message"
```

---

## Push Command

push → upload local repo content to remote repo

```
git push origin main
```

push = local → remote

---

## Pull Command

used to fetch and download content from remote repo

```
git pull origin main
```
