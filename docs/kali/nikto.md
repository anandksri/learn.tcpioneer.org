
# Nikto

## What is Nikto

- **Nikto** is an open-source **web server vulnerability scanner**.
- It is used to identify **security issues, misconfigurations, outdated software, and dangerous files on web servers**.
- Nikto is widely used by:
  - penetration testers
  - cybersecurity professionals
  - bug bounty hunters
  - ethical hackers
  - CTF players

Nikto performs automated checks for:

- outdated server software
- dangerous files and scripts
- default configuration issues
- insecure HTTP headers
- known vulnerabilities

Because of its wide vulnerability database, Nikto is considered a **useful reconnaissance tool in web application security testing**.

---

## Install Nikto

Nikto is usually pre-installed in **Kali Linux**.

To verify installation:

```
nikto -Version
```

If Nikto is not installed:

```
sudo apt install nikto
```

---

## Basic Syntax

Basic Nikto command:

```
nikto -h <target>
```

Example:

```
nikto -h http://example.com
```

Nikto will scan the web server and report:

- vulnerabilities
- server configuration issues
- potential security risks

---

## Scan a Website

To scan a website for vulnerabilities:

```
nikto -h http://example.com
```

Example:

```
nikto -h http://192.168.1.10
```

Nikto will analyze:

- HTTP headers
- server software
- known vulnerable scripts

---

## Scan a Specific Port

If a web service runs on a custom port:

```
nikto -h http://example.com -p <port>
```

Example:

```
nikto -h http://192.168.1.10 -p 8080
```

This scans the service running on **port 8080**.

---

## Scan with SSL

To scan HTTPS services:

```
nikto -h https://example.com
```

Example:

```
nikto -h https://example.com
```

Nikto will test **SSL-enabled web servers**.

---

## Save Scan Results

To save scan results:

```
nikto -h http://example.com -o result.txt
```

Example:

```
nikto -h http://example.com -o scan_result.txt
```

This saves the scan output to a file.

---

## Specify Output Format

Nikto supports multiple output formats.

Example:

```
nikto -h http://example.com -Format html -o report.html
```

Supported formats:

- txt
- html
- csv
- xml

These are useful for **security reports and documentation**.

---

## Scan Multiple Targets

Nikto can scan multiple targets using an input file.

Example:

```
nikto -h targets.txt
```

Example targets file:

```
http://example.com
http://testsite.com
```

This allows scanning multiple websites automatically.

---

## Display Plugins

To list available Nikto plugins:

```
nikto -list-plugins
```

Plugins allow Nikto to perform **specialized security checks**.

---

## Simple Workflow

Typical web vulnerability scanning workflow:

### Step 1 — Identify Target

Example:

```
http://example.com
```

---

### Step 2 — Run Nikto Scan

```
nikto -h http://example.com
```

---

### Step 3 — Review Results

Look for:

- outdated software
- exposed directories
- insecure configurations

---

### Step 4 — Investigate Vulnerabilities

Manually verify findings to confirm security issues.

---

## Use Cases

Nikto is commonly used for:

- web server vulnerability scanning
- configuration auditing
- security assessments
- penetration testing
- bug bounty reconnaissance
- CTF challenges

---

## Best Practice

Nikto scans should only be performed in **authorized environments**.

Safe practice platforms:

- TryHackMe
- Hack The Box
- PortSwigger Labs
- OWASP Juice Shop
- cybersecurity labs

Never scan websites **without permission**.

---

## Summary

Nikto is a **powerful web server vulnerability scanner** used in cybersecurity testing.

It allows security professionals to:

- detect web server vulnerabilities
- identify misconfigurations
- discover dangerous files
- analyze server security posture

Learning Nikto is an important step for anyone studying **web security and penetration testing**.

<div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>
Use tools like Wireshark to observe network traffic. Seeing how data moves across a network builds strong intuition.
</div>