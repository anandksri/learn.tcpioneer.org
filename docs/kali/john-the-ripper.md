
# John the Ripper

## What is John the Ripper

- **John the Ripper (JtR)** is a popular **password cracking tool** used to test password strength.
- It is commonly used in **cybersecurity, penetration testing, and digital forensics**.
- John the Ripper can crack passwords from various hash formats.

It is widely used by:

- penetration testers
- cybersecurity professionals
- system administrators
- ethical hackers
- CTF players

John the Ripper works by comparing password hashes against:

- wordlists
- dictionary attacks
- brute-force attempts

Because of its flexibility and speed, it is considered one of the **most important password auditing tools**.

---

## Install John the Ripper

John the Ripper is usually pre-installed in **Kali Linux**.

To verify installation:

```
john --help
```

If it is not installed:

```
sudo apt install john
```

---

## Basic Syntax

Basic John command:

```
john <hash-file>
```

Example:

```
john hashes.txt
```

John will attempt to crack the password hashes stored in the file.

---

## Hash File Format

Example hash file:

```
admin:$6$randomhashvalue
user:$6$anotherhashvalue
```

Each line contains:

```
username:hash
```

---

## Use Wordlist Attack

The most common attack is a **dictionary attack** using a wordlist.

```
john --wordlist=rockyou.txt hashes.txt
```

Explanation:

| Option | Meaning |
|------|------|
| --wordlist | password list |
| hashes.txt | file containing hashes |

Example wordlist location:

```
/usr/share/wordlists/rockyou.txt
```

---

## Show Cracked Passwords

After cracking hashes, display results:

```
john --show hashes.txt
```

Example output:

```
admin:password123
user:qwerty
```

---

## Single Crack Mode

Single crack mode uses information from the username.

```
john --single hashes.txt
```

This generates passwords based on:

- username
- name patterns
- common variations

---

## Incremental Mode (Brute Force)

To perform brute-force password cracking:

```
john --incremental hashes.txt
```

This mode tries **all possible character combinations**.

Note: This can take a long time depending on password complexity.

---

## Specify Hash Format

Sometimes you must specify the hash type.

Example:

```
john --format=raw-md5 hashes.txt
```

Common formats include:

- raw-md5
- sha1
- sha256
- bcrypt
- nt
- descrypt

To list formats:

```
john --list=formats
```

---

## Crack Linux Password Hashes

Extract hashes from:

```
/etc/shadow
```

Example format:

```
username:$6$hashvalue
```

Crack them using:

```
john shadow.txt
```

---

## Combine with Unshadow

To combine `/etc/passwd` and `/etc/shadow`:

```
unshadow passwd shadow > hashes.txt
```

Then run:

```
john hashes.txt
```

---

## Save Cracked Passwords

John automatically saves results in:

```
~/.john/john.pot
```

This file stores all cracked passwords.

---

## Simple Workflow

Typical password cracking workflow:

### Step 1 — Obtain Hashes

Example:

```
hashes.txt
```

---

### Step 2 — Run Dictionary Attack

```
john --wordlist=rockyou.txt hashes.txt
```

---

### Step 3 — Check Cracked Passwords

```
john --show hashes.txt
```

---

### Step 4 — Use Brute Force if Needed

```
john --incremental hashes.txt
```

---

## Use Cases

John the Ripper is commonly used for:

- password strength auditing
- hash cracking
- security testing
- digital forensics
- penetration testing
- CTF challenges

---

## Best Practice

Password cracking should only be performed in **authorized environments**.

Safe practice platforms:

- TryHackMe
- Hack The Box
- cybersecurity labs
- CTF competitions

Never attempt to crack passwords **without permission**.

---

## Summary

John the Ripper is one of the **most powerful password cracking tools**.

It helps security professionals:

- audit password strength
- crack password hashes
- identify weak authentication systems
- improve security practices

Learning John the Ripper is essential for anyone studying **cybersecurity and penetration testing**.
<div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>
Consistency matters more than intensity. Learning a little every day builds stronger skills than studying once in a while.
</div>