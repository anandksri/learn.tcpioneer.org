
# Nmap

## What is Nmap

- **Nmap (Network Mapper)** is one of the most powerful **network scanning and reconnaissance tools**.
- It is used to **discover hosts, identify open ports, detect running services, and analyze network security**.
- Nmap is widely used by:
  - penetration testers
  - cybersecurity professionals
  - system administrators
  - ethical hackers
  - CTF players

Nmap helps security professionals understand:

- which systems are active
- what services are running
- which ports are open
- what operating systems are being used

Because of its flexibility and powerful scanning engine, Nmap is considered a **core tool in cybersecurity reconnaissance**.

---

## Install Nmap

Nmap is usually pre-installed in **Kali Linux**.

To check installation:

```
nmap --version
```

If it is not installed:

```
sudo apt install nmap
```

---

## Basic Scan

The most basic Nmap scan:

```
nmap <target>
```

Example:

```
nmap 192.168.1.10
```

This scan will:

- discover open ports
- detect running services
- identify accessible network ports

---

## Scan with Service Detection

To identify **services and versions running on open ports**:

```
nmap -sV <target>
```

Example:

```
nmap -sV 192.168.1.10
```

Example output:

```
22/tcp open  ssh     OpenSSH 7.9
80/tcp open  http    Apache 2.4.41
```

This information helps identify **potential vulnerabilities**.

---

## Scan All Ports

By default Nmap scans **1000 common ports**.

To scan all **65535 ports**:

```
nmap -p- <target>
```

Example:

```
nmap -p- 192.168.1.10
```

This is useful when services run on **unusual ports**.

---

## OS Detection

Nmap can attempt to **identify the operating system** of a target machine.

```
nmap -O <target>
```

Example:

```
sudo nmap -O 192.168.1.10
```

Possible output:

```
OS: Linux 5.x
```

This works by analyzing **TCP/IP fingerprinting patterns**.

---

## Aggressive Scan

Aggressive scan enables multiple features:

- OS detection
- version detection
- script scanning
- traceroute

Command:

```
nmap -A <target>
```

Example:

```
nmap -A 192.168.1.10
```

This provides **detailed reconnaissance results**.

---

## Fast Scan

A fast scan checks fewer ports for quicker results.

```
nmap -F <target>
```

Example:

```
nmap -F 192.168.1.10
```

Useful when performing **quick reconnaissance**.

---

## Scan Specific Ports

You can scan specific ports using:

```
nmap -p <port> <target>
```

Example:

```
nmap -p 80,443 192.168.1.10
```

This checks only the selected ports.

---

## Scan a Range of IPs

Scan multiple IP addresses in a range:

```
nmap 192.168.1.1-100
```

This scans:

```
192.168.1.1 → 192.168.1.100
```

Useful for scanning **small networks**.

---

## Scan a Subnet

Scan an entire subnet:

```
nmap 192.168.1.0/24
```

This scans **256 possible IP addresses**.

Common for **internal network reconnaissance**.

---

## Disable Ping

Some hosts block ping requests.

To scan without host discovery:

```
nmap -Pn <target>
```

Example:

```
nmap -Pn 192.168.1.10
```

This forces Nmap to **scan the target even if ping fails**.

---

## SYN Scan

SYN scan is one of the **most common stealth scanning techniques**.

```
sudo nmap -sS <target>
```

Example:

```
sudo nmap -sS 192.168.1.10
```

Advantages:

- faster scanning
- stealthier detection
- commonly used in penetration testing

---

## UDP Scan

UDP services can also be scanned.

```
sudo nmap -sU <target>
```

Example:

```
sudo nmap -sU 192.168.1.10
```

UDP services include:

- DNS
- SNMP
- DHCP

---

## Save Output

Save results to a file:

```
nmap -oN result.txt <target>
```

Example:

```
nmap -oN scan_result.txt 192.168.1.10
```

This is useful for **reporting and documentation**.

---

## XML Output

XML output is useful for automation tools.

```
nmap -oX result.xml <target>
```

Example:

```
nmap -oX scan.xml 192.168.1.10
```

Many security tools can **import Nmap XML results**.

---

## Timing Options

Nmap allows adjusting scan speed.

```
nmap -T4 <target>
```

Timing levels:

| Option | Speed |
|------|------|
| T0 | very slow |
| T1 | slow |
| T2 | polite |
| T3 | normal |
| T4 | fast |
| T5 | very aggressive |

Example:

```
nmap -T4 192.168.1.10
```

---

## Verbose Mode

To display more scanning information:

```
nmap -v <target>
```

Example:

```
nmap -v 192.168.1.10
```

Verbose mode shows **real-time scanning progress**.

---

## Combine Options

Nmap commands can combine multiple options.

Example:

```
nmap -A -T4 -p- <target>
```

This command performs:

- aggressive scan
- fast timing
- all port scan

Example:

```
nmap -A -T4 -p- 192.168.1.10
```

---

## Simple Workflow

Typical reconnaissance workflow using Nmap:

### Step 1 — Discover Target

```
nmap 192.168.1.10
```

---

### Step 2 — Identify Services

```
nmap -sV 192.168.1.10
```

---

### Step 3 — Perform Detailed Scan

```
nmap -A 192.168.1.10
```

---

### Step 4 — Investigate Open Ports

Focus on services like:

- SSH
- FTP
- HTTP
- SMB

---

## Use Cases

Nmap is commonly used for:

- network discovery
- vulnerability reconnaissance
- service identification
- penetration testing
- security auditing
- CTF challenges

---

## Best Practice

Nmap should only be used in **authorized environments**.

Safe practice platforms:

- TryHackMe
- Hack The Box
- PortSwigger Labs
- OWASP Juice Shop
- CTF competitions

Never scan systems **without permission**.

---

## Summary

Nmap is one of the **most essential tools in cybersecurity reconnaissance**.

It allows security professionals to:

- discover hosts
- identify open ports
- detect services
- analyze operating systems
- perform network mapping

Mastering Nmap is a fundamental step for anyone pursuing **ethical hacking and cybersecurity**.

<div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>
Use multiple learning resources such as documentation, videos, labs, and challenges to reinforce understanding.
</div>