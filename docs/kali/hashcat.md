
# Hashcat

## What is Hashcat

- **Hashcat** is a powerful **password recovery and hash cracking tool**.
- It is widely known for being one of the **fastest password cracking tools available**, especially when using GPU acceleration.
- Hashcat is used by:
  - penetration testers
  - cybersecurity professionals
  - digital forensics investigators
  - ethical hackers
  - CTF players

Hashcat is capable of cracking many types of hashes such as:

- MD5
- SHA1
- SHA256
- bcrypt
- NTLM
- WPA/WPA2
- Kerberos
- many others

Hashcat supports **dictionary attacks, brute-force attacks, rule-based attacks, and hybrid attacks**.

Because of its speed and flexibility, Hashcat is considered one of the **most advanced password cracking tools in cybersecurity**.

---

## Install Hashcat

Hashcat is usually pre-installed in **Kali Linux**.

To verify installation:

```
hashcat --help
```

If Hashcat is not installed:

```
sudo apt install hashcat
```

---

## Basic Syntax

Basic Hashcat command format:

```
hashcat -m <hash-type> -a <attack-mode> <hash-file> <wordlist>
```

Example:

```
hashcat -m 0 -a 0 hashes.txt rockyou.txt
```

Explanation:

| Option | Meaning |
|------|------|
| -m | hash type |
| -a | attack mode |
| hashes.txt | file containing hashes |
| rockyou.txt | wordlist |

---

## Identify Hash Type

Before cracking a hash, you must know the **hash type**.

Example:

```
5f4dcc3b5aa765d61d8327deb882cf99
```

This is an **MD5 hash**.

To view supported hash types:

```
hashcat --help
```

Common examples:

| Hash | Mode |
|------|------|
| MD5 | 0 |
| SHA1 | 100 |
| SHA256 | 1400 |
| NTLM | 1000 |
| bcrypt | 3200 |

---

## Dictionary Attack

The most common attack is a **dictionary attack**.

```
hashcat -m 0 -a 0 hashes.txt rockyou.txt
```

Explanation:

- Hashcat compares hashes against passwords in the wordlist.
- If a match is found, the password is recovered.

Common wordlist location:

```
/usr/share/wordlists/rockyou.txt
```

---

## Brute Force Attack

Brute-force tries **all possible password combinations**.

Example:

```
hashcat -m 0 -a 3 hashes.txt ?a?a?a?a?a?a
```

Explanation:

| Mask | Meaning |
|------|------|
| ?a | all characters |
| ?l | lowercase letters |
| ?u | uppercase letters |
| ?d | digits |
| ?s | symbols |

Example:

```
?a?a?a?a
```

tries every 4-character combination.

---

## Rule-Based Attack

Rule-based attacks modify dictionary words using rules.

Example:

```
hashcat -m 0 -a 0 hashes.txt rockyou.txt -r rules/best64.rule
```

This applies transformations such as:

- adding numbers
- capitalizing letters
- appending symbols

Rule-based attacks are **very effective in real-world password cracking**.

---

## Show Cracked Passwords

After cracking hashes, display results:

```
hashcat --show hashes.txt
```

Example output:

```
5f4dcc3b5aa765d61d8327deb882cf99:password
```

---

## Restore Session

Hashcat saves progress automatically.

To restore a session:

```
hashcat --restore
```

This is useful when cracking long or complex passwords.

---

## Save Output

To save cracked passwords:

```
hashcat -m 0 -a 0 hashes.txt rockyou.txt -o cracked.txt
```

Example result:

```
cracked.txt
```

---

## Simple Workflow

Typical password cracking workflow:

### Step 1 — Obtain Hash

Example:

```
5f4dcc3b5aa765d61d8327deb882cf99
```

---

### Step 2 — Save Hash to File

```
hashes.txt
```

---

### Step 3 — Run Dictionary Attack

```
hashcat -m 0 -a 0 hashes.txt rockyou.txt
```

---

### Step 4 — Check Results

```
hashcat --show hashes.txt
```

---

### Step 5 — Use Brute Force if Needed

```
hashcat -m 0 -a 3 hashes.txt ?a?a?a?a?a?a
```

---

## Use Cases

Hashcat is commonly used for:

- password auditing
- hash cracking
- digital forensics
- penetration testing
- security assessments
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

Hashcat is one of the **most powerful and fastest password cracking tools** available.

It helps security professionals:

- recover lost passwords
- audit password strength
- analyze authentication security
- test password policies

Learning Hashcat is essential for anyone studying **cybersecurity, password security, and penetration testing**.

<div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>
Read official documentation whenever possible. Many powerful features are only explained in the original documentation.
</div>