
# Gobuster

## What is Gobuster

- **Gobuster** is a fast **directory and file brute‑forcing tool** written in Go.
- It is used to **discover hidden directories, files, and virtual hosts on web servers**.
- Gobuster is widely used by:
  - penetration testers
  - bug bounty hunters
  - cybersecurity researchers
  - CTF players

Gobuster helps testers identify:

- hidden admin panels
- backup files
- configuration files
- undocumented API endpoints

Because of its speed and simplicity, Gobuster is considered a **core reconnaissance tool in web security testing**.

---

## Install Gobuster

Gobuster is usually pre-installed in **Kali Linux**.

To check installation:

```
gobuster -h
```

If it is not installed:

```
sudo apt install gobuster
```

---

## Basic Syntax

Basic Gobuster command:

```
gobuster dir -u <target-url> -w <wordlist>
```

Explanation:

| Option | Meaning |
|------|------|
| dir | directory brute-force mode |
| -u | target URL |
| -w | wordlist |

Example:

```
gobuster dir -u http://example.com -w wordlist.txt
```

---

## Directory Enumeration

To discover hidden directories on a website:

```
gobuster dir -u http://example.com -w /usr/share/wordlists/dirb/common.txt
```

Example output:

```
/admin
/login
/uploads
```

These may reveal **hidden web application components**.

---

## Use Extensions

You can search for specific file types.

```
gobuster dir -u http://example.com -w wordlist.txt -x php,html,txt
```

Example result:

```
/login.php
/config.txt
/admin.html
```

This helps find **sensitive files on the server**.

---

## Specify Threads

Gobuster can run multiple threads for faster scanning.

```
gobuster dir -u http://example.com -w wordlist.txt -t 50
```

Explanation:

| Option | Meaning |
|------|------|
| -t | number of threads |

More threads = faster scanning.

---

## Ignore Status Codes

Sometimes servers return unwanted responses.

You can ignore them:

```
gobuster dir -u http://example.com -w wordlist.txt -b 404
```

Explanation:

| Option | Meaning |
|------|------|
| -b | blacklist status codes |

This filters out unnecessary results.

---

## Virtual Host Enumeration

Gobuster can discover **hidden subdomains or virtual hosts**.

```
gobuster vhost -u http://example.com -w wordlist.txt
```

Example output:

```
admin.example.com
dev.example.com
test.example.com
```

This helps discover **internal environments and staging servers**.

---

## DNS Subdomain Enumeration

Gobuster can also brute-force DNS subdomains.

```
gobuster dns -d example.com -w wordlist.txt
```

Example output:

```
mail.example.com
vpn.example.com
portal.example.com
```

This helps map the **attack surface of a target domain**.

---

## Save Output

To save results to a file:

```
gobuster dir -u http://example.com -w wordlist.txt -o result.txt
```

This helps in **reporting and documentation**.

---

## Common Wordlists

Popular wordlists used with Gobuster:

```
/usr/share/wordlists/dirb/common.txt
/usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
/usr/share/seclists/Discovery/Web-Content/common.txt
```

Using better wordlists improves **discovery accuracy**.

---

## Simple Workflow

Typical web reconnaissance workflow:

### Step 1 — Identify Target Website

Example:

```
http://example.com
```

---

### Step 2 — Run Directory Scan

```
gobuster dir -u http://example.com -w common.txt
```

---

### Step 3 — Identify Hidden Endpoints

Look for:

- admin panels
- login pages
- upload directories
- configuration files

---

### Step 4 — Investigate Results

Test discovered paths manually in the browser.

---

## Use Cases

Gobuster is commonly used for:

- directory brute forcing
- hidden endpoint discovery
- subdomain enumeration
- virtual host discovery
- bug bounty reconnaissance
- CTF challenges

---

## Best Practice

Always perform web scanning in **authorized environments**.

Safe places to practice:

- TryHackMe
- Hack The Box
- PortSwigger Labs
- OWASP Juice Shop
- CTF platforms

Never scan websites **without permission**.

---

## Summary

Gobuster is a **fast and efficient reconnaissance tool for web security testing**.

It allows security professionals to:

- discover hidden directories
- find sensitive files
- enumerate subdomains
- map web application attack surfaces

Mastering Gobuster is an essential skill for **bug bounty hunting and web penetration testing**.

<div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>
Create your own lab environment using virtual machines or Docker. This allows you to safely test tools and techniques.
</div>