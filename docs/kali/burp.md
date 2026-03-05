
# Burp Suite

## What is Burp Suite

- **Burp Suite** is one of the most powerful tools used for web application security testing  
- It acts as a **proxy between your browser and the target website**
- It allows you to **intercept, inspect, and modify HTTP/HTTPS traffic**
- Widely used by:
  - Security researchers
  - Ethical hackers
  - Bug bounty hunters
  - CTF players

Burp Suite helps testers understand **how web applications communicate with servers** and allows them to **manipulate requests to discover vulnerabilities**.

---

## Why Burp Suite is Important

Burp Suite is essential for web security testing because it allows you to:

- analyze web traffic
- modify requests before they reach the server
- test authentication systems
- find vulnerabilities like
  - SQL Injection
  - XSS
  - IDOR
  - CSRF
  - Authentication bypass

It is commonly used in **Bug Bounty programs and penetration testing engagements**.

---

## Start Burp Suite

To start Burp Suite in **Kali Linux**, open terminal and run:

```
burpsuite
```

Steps after launching:

1. Wait for Burp Suite to load
2. Choose **Temporary Project**
3. Click **Next**
4. Select **Use Burp Defaults**
5. Click **Start Burp**

Burp Suite will open with several tabs like:

- Proxy
- Target
- Repeater
- Intruder
- Scanner (Pro version)
- Sequencer
- Decoder

---

## Understanding Burp Suite Interface

Burp Suite contains several important modules:

| Module | Purpose |
|------|------|
| Proxy | Intercept and view browser traffic |
| Target | Map website structure |
| Repeater | Manually modify and resend requests |
| Intruder | Automate attacks (bruteforce, fuzzing) |
| Decoder | Encode/decode data |
| Comparer | Compare responses |

Most beginners start with **Proxy, Repeater, and Intruder**.

---

## Setup Proxy

Burp Suite works by acting as a **proxy server** between your browser and the internet.

Default Burp proxy:

```
127.0.0.1:8080
```

### Step 1 — Configure Browser Proxy

Set your browser proxy to:

```
IP Address: 127.0.0.1
Port: 8080
```

### Firefox Setup Example

1. Open Firefox
2. Go to **Settings**
3. Search for **Network Settings**
4. Click **Manual Proxy Configuration**
5. Enter:

```
HTTP Proxy: 127.0.0.1
Port: 8080
```

Now all browser traffic will pass through **Burp Suite**.

---

## Install Burp CA Certificate (Important)

Without installing the Burp certificate, HTTPS websites may not load properly.

Steps:

1. Open browser
2. Visit:

```
http://burp
```

3. Click **CA Certificate**
4. Download the certificate
5. Import it into the browser

Firefox Import:

```
Settings → Privacy & Security → Certificates → Import
```

This allows Burp to **intercept HTTPS traffic securely**.

---

## Intercept Request

Burp Suite can **capture requests before they reach the server**.

Steps:

1. Go to **Proxy tab**
2. Click **Intercept**
3. Turn **Intercept ON**
4. Open any website in your browser
5. The request will appear inside Burp Suite

Example intercepted request:

```
GET /login HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
Cookie: session=12345
```

You can now:

- modify parameters
- change cookies
- edit headers
- tamper with requests

Click **Forward** to send the request to the server.

---

## Send to Repeater

**Repeater** is used for **manual testing of requests**.

Steps:

1. Capture a request
2. Right-click the request
3. Click:

```
Send to Repeater
```

Open **Repeater tab**

Here you can:

- modify parameters
- change payloads
- resend requests multiple times
- observe server responses

Example use cases:

- testing SQL injection
- testing authentication bypass
- testing parameter manipulation

---

## Send to Intruder

**Intruder** is used for **automated attacks and fuzzing**.

Steps:

1. Capture a request
2. Right-click request
3. Click:

```
Send to Intruder
```

Intruder allows you to:

- brute force login forms
- fuzz parameters
- test multiple payloads
- discover hidden inputs

Example attack types:

| Attack Type | Purpose |
|------|------|
| Sniper | Test one parameter |
| Battering Ram | Same payload everywhere |
| Pitchfork | Multiple payload sets |
| Cluster Bomb | All payload combinations |

---

## Useful Burp Tools

Burp also provides several helpful utilities:

### Decoder

Used for:

- Base64 decode
- URL decode
- Hash analysis

### Comparer

Used to:

- compare two responses
- detect small differences

### Target

Shows the **site map of the target application**.

This helps testers understand:

- directories
- endpoints
- APIs
- parameters

---

## Common Use Cases

Burp Suite is used to test for many web vulnerabilities.

Examples include:

### Parameter Manipulation

Change values like:

```
user_id=100 → user_id=101
```

This may expose another user's data.

---

### Authentication Testing

Modify login requests such as:

```
username=admin
password=admin
```

Try different combinations.

---

### Session Testing

Modify cookies:

```
session=abc123
```

to check if sessions are predictable.

---

### API Testing

Capture API calls and modify JSON parameters.

Example:

```
POST /api/update
{
 "role": "user"
}
```

Change to:

```
"role": "admin"
```

---

## Best Practice

When using Burp Suite:

- Always test in **authorized environments**
- Use **lab environments or CTF platforms**
- Do not attack real websites without permission

Safe practice platforms:

- PortSwigger Web Security Academy
- TryHackMe
- Hack The Box
- OWASP Juice Shop

---

## Summary

Burp Suite is a **must-learn tool for anyone interested in web security**.

It helps you:

- understand web application behavior
- intercept and manipulate requests
- test vulnerabilities
- perform professional penetration testing

Mastering Burp Suite is one of the **most important skills for bug bounty hunters and ethical hackers**.


<div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>
Follow security blogs and research papers to stay updated with the latest vulnerabilities and techniques.
</div>