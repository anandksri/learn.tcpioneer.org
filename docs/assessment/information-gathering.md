# Assessment Methodology: Information Gathering

---

## 📌 Information Gathering

- It is the first and most important phase of Penetration Testing, where the tester gathers as much information as possible about the target system before attempting any attacks.  
- The main purpose of information gathering is to understand the target environment and identify potential entry points that could be used during later stages of the penetration test.  
- By analyzing the collected information, the tester can learn about the target’s infrastructure, technologies, domains, IP addresses, and services.  
- It helps the tester build a clear picture of the target’s attack surface and allows them to plan more effectively instead of blindly attacking the target environment.  

---

## 🔎 Steps of Information Gathering

- Performed through a series of steps that allow a tester to collect information about the target system or organization.  
- Helps the tester understand the structure of the target environment and identify possible attack surfaces.  

---

### 1. Target Identification
- The first step is identifying the target domain, application, or network that will be assessed.  
- This target becomes the starting point for all further reconnaissance activities.  
- Understanding the scope ensures that the tester focuses only on authorized systems during the assessment.  

---

### 2. Domain Registration Information
- In this step, the tester gathers information related to domain registration details.  
- This includes the domain owner, registrar, creation date, expiration date, and name servers.  
- These details provide insight into the organization responsible for managing the domain.  

---

### 3. DNS Enumeration
- Involves collecting information about DNS records associated with the target domain.  
- These records reveal IP addresses, mail servers, and name servers.  
- Understanding DNS records helps map the network structure connected to the domain.  

---

### 4. Subdomain Discovery
- Organizations often host multiple services under different subdomains.  
- The tester identifies these subdomains to expand the attack surface.  
- This may reveal development environments, APIs, or hidden services that can act as entry points.  

---

### 5. Technology Identification
- The tester identifies technologies used by the target such as web servers, programming languages, frameworks, or CMS.  
- Understanding the technology stack helps determine possible vulnerabilities.  

---

### 6. Network and Service Identification
- The tester analyzes the target system to identify active hosts, open ports, and running services.  
- Each service may represent a potential entry point.  

---

### 7. Email and Employee Information Gathering
- Collecting publicly available email information provides insight into the organizational structure, departments, and key personnel.  
- This information can also help identify potential targets for phishing simulations or social engineering tests.  

---

##  Types of Information Gathering

### Passive Information Gathering

- Method of collecting information about a target without directly interacting with the targeting system.
- Penetration tester gathers data from publicly available sources so that no traffic or requests are sent to the target. Because of this, passive information gathering is difficult for organization to detect.
- Main goal is to obtain useful details about the targets such as domain names, IP addresses, employee information, technology used, email addresses, and DNS records.
- Helps the tester understand the targeted environment and identify possible attack points before moving to more active testing.
- Common Tool includes:
  - Whois:
    - Passive recon tool used to query database that store domain registration details. Helps find out who own a domain name, when it was registered and other administrative and technical information.
    - Web based whois:
---
<div style="background:#1e2633; border-radius:8px; padding:18px; margin:20px 0; border-left:5px solid #4da3ff; text-align:center;">
<strong>Whois</strong>
<br> <br>
<img src="/assets/images/assessment/whois-1.png"  alt="whois - TCP Handbook" style="max-width:100%; border-radius:6px;">
</div>

---
- Taking Example of tesla.com:

<div style="background:#1e2633; border-radius:8px; padding:18px; margin:20px 0; border-left:5px solid #4da3ff; text-align:center;">
<strong>Tesla.com</strong>
<br> <br>
<img src="/assets/images/assessment/tesla.com.png"  alt="Tesla.com - TCP Handbook" style="max-width:100%; border-radius:6px;">
</div>

---
- Command based: `whois google.com`

 <div style="background:#1e2633; border-radius:8px; padding:18px; margin:20px 0; border-left:5px solid #4da3ff; text-align:center;">
<strong>whois google.com</strong>
<br> <br>
<img src="/assets/images/assessment/whois-google.com.png"  alt="google.com - TCP Handbook" style="max-width:100%; border-radius:6px;">
</div>

---

- dig:
  - dig is a passive recon tool used to query DNS server and retrieve detailed information about domain names and their DNS records.
  - Example: `dig google.com`

 <div style="background:#1e2633; border-radius:8px; padding:18px; margin:20px 0; border-left:5px solid #4da3ff; text-align:center;">
<strong>dig google.com</strong>
<br> <br>
<img src="/assets/images/assessment/dig-google.com.png"  alt="dig google.com - TCP Handbook" style="max-width:100%; border-radius:6px;">
</div>
 
 
  - DNS Query Result: The command `dig google.com` asked the DNS server for the A record (IP address) of `google.com`.
  - Resolved IP Address: The DNS response shows that google.com resolves to the IP address `142.250.67.206`.
  - Query Details: The request was answered successfully (`NOERROR`) by the DNS server 8.8.8.8 in 123 milliseconds.

---

- Wayback Machine:
  - The Wayback Machine (from Internet Archive) allows testers to view archived versions of websites from the past. This can reveal old pages, directories, API endpoints, or sensitive information that may no longer be visible on the current site.

 <div style="background:#1e2633; border-radius:8px; padding:18px; margin:20px 0; border-left:5px solid #4da3ff; text-align:center;">
<strong>Wayback Machine</strong>
<br> <br>
<img src="/assets/images/assessment/WaybackMachine.png"  alt="Wayback Machine- TCP Handbook" style="max-width:100%; border-radius:6px;">
</div>

---
- snov.io:

  It is an OSINT-based email discovery tool used to find publicly available email addresses and email patterns associated with a specific domain or organization.

 <div style="background:#1e2633; border-radius:8px; padding:18px; margin:20px 0; border-left:5px solid #4da3ff; text-align:center;">
<strong>snov.io</strong>
<br> <br>
<img src="/assets/images/assessment/snovio.png"  alt="snov.io - TCP Handbook" style="max-width:100%; border-radius:6px;">
</div>

---

- **SSL Labs:**

  SSL Labs analyzes a website’s SSL/TLS configuration. It provides information about the server’s security configuration, supported protocols, certificate details, and encryption strength, which helps understand the target’s security posture.

 <div style="background:#1e2633; border-radius:8px; padding:18px; margin:20px 0; border-left:5px solid #4da3ff; text-align:center;">
<strong>SSL Labs</strong>
<br> <br>
<img src="/assets/images/assessment/SSLLabs.png"  alt="SSL Labs - TCP Handbook" style="max-width:100%; border-radius:6px;">
</div>

---

- Sublist3r:

  Sublist3r is used to discover subdomains of a target domain by gathering data from public sources such as search engines and certificate transparency logs. Example: `sublist3r -d google.com`

 <div style="background:#1e2633; border-radius:8px; padding:18px; margin:20px 0; border-left:5px solid #4da3ff; text-align:center;">
<strong>Sublist3r</strong>
<br> <br>
<img src="/assets/images/assessment/Sublist3r.png"  alt="Sublist3r - TCP Handbook" style="max-width:100%; border-radius:6px;">
</div>

---

- dnsenum

  dnsenum is a DNS enumeration tool that gathers information about a domain’s DNS records, name servers, and subdomains. It helps identify the DNS infrastructure of the target. Example: `dnsenum google.com`

 <div style="background:#1e2633; border-radius:8px; padding:18px; margin:20px 0; border-left:5px solid #4da3ff; text-align:center;">
<strong>dnsenum</strong>
<br> <br>
<img src="/assets/images/assessment/dnsenum.png"  alt="dnsenum - TCP Handbook" style="max-width:100%; border-radius:6px;">
</div>

---

- Google Dorking:

  **Google Dorking** uses advanced search operators in Google to find **sensitive or hidden information** indexed by search engines, such as login pages, exposed files, configuration files, or publicly accessible documents. example: `site:google.com`

 <div style="background:#1e2633; border-radius:8px; padding:18px; margin:20px 0; border-left:5px solid #4da3ff; text-align:center;">
<strong>Google Dorking</strong>
<br> <br>
<img src="/assets/images/assessment/GoogleDorking.png"  alt="Google Dorking - TCP Handbook" style="max-width:100%; border-radius:6px;">
</div>

---

### Active Information Gathering

- Technique used in penetration testing where the tester directly interacts with the target system or network to collect information. In this method, the tester sends requests or probes to the target in order to discover details such as open ports, running services, operating systems and web directories.
- Active reconnaissance involves direct communication with the target, meaning the activities may be detected by the targeted security systems such as firewall or intrusion detection systems.
- Mail objective of active information fathering is to obtain technical information about the target environment including network structure, server configurations and available services.
- Helps the penetration tester identify potential vulnerabilities and plan further testing steps such as scanning and exploitation.
- Common tools includes:

---

- Nmap:

  Nmap (Network Mapper) is used to perform network scanning to discover live hosts, open ports, running services, and service versions on a target system. Example: nmap -sV google.com

 <div style="background:#1e2633; border-radius:8px; padding:18px; margin:20px 0; border-left:5px solid #4da3ff; text-align:center;">
<strong>Nmap</strong>
<br> <br>
<img src="/assets/images/assessment/Nmap.png"  alt="Nmap - TCP Handbook" style="max-width:100%; border-radius:6px;">
</div>

 - It scans the target domain of google[.]com and identifies open ports. Detects service versions running on those ports

---

- Nikto:

  Nikto is a web server scanning tool used to detect vulnerabilities, misconfigurations, and outdated software on a web server. Example: `nikto -h https://google[.]com`

 <div style="background:#1e2633; border-radius:8px; padding:18px; margin:20px 0; border-left:5px solid #4da3ff; text-align:center;">
<strong>Nikto</strong>
<br> <br>
<img src="/assets/images/assessment/Nikto.png"  alt="Nikto - TCP Handbook" style="max-width:100%; border-radius:6px;">
</div>

 - Scans web server of google[.]com and checks for known vulnerabilities. dentifies security misconfigurations and risky files

---

- Netcat:

  It is a networking tool used for port testing, banner grabbing and establishing connections with a target host.

 <div style="background:#1e2633; border-radius:8px; padding:18px; margin:20px 0; border-left:5px solid #4da3ff; text-align:center;">
<strong>Netcat</strong>
<br> <br>
<img src="/assets/images/assessment/Netcat.png"  alt="Netcat - TCP Handbook" style="max-width:100%; border-radius:6px;">
</div>

 - Connects to google[.]com on port 80
  - Allows interaction with the web server
  - Can reveal server responses or service banners

---

- WhatWeb

  Technology detection tool used to identify technologies used by website such as web server frameworks and programming languages.
  Example: `whatweb google[.]com`

 <div style="background:#1e2633; border-radius:8px; padding:18px; margin:20px 0; border-left:5px solid #4da3ff; text-align:center;">
<strong>WhatWeb</strong>
<br> <br>
<img src="/assets/images/assessment/WhatWeb.png"  alt="WhatWeb - TCP Handbook" style="max-width:100%; border-radius:6px;">
</div>

 - It sends requests to google[.]com
  - Detects technologies used by the websites
  - Show information about web server, frameworks and software

---

- Dirb:

  Web content scanner used to discover hidden directories and files on a web server by performing a dictionary-based brute-fore attack.
  Example: `dirb https://google[.]com`

 <div style="background:#1e2633; border-radius:8px; padding:18px; margin:20px 0; border-left:5px solid #4da3ff; text-align:center;">
<strong>Dirb</strong>
<br> <br>
<img src="/assets/images/assessment/Dirb.png"  alt="Dirb - TCP Handbook" style="max-width:100%; border-radius:6px;">
</div>

 - It sends requests to the target website and uses a wordlist to try different directory names. Helps discover paths on the server.

---

## Target Scoping

- Defines what is allowed to be tested.
- lists which domain, application or system security researchers are permitted to test.
- Bug bounty program usually speficies assests that are allowed and those that must not be tested such as third-party services, production infrastructure, or critical systems.
- The scope often includes rules about what testing techniques are permitted and what is prohibited.
- Helps security researches concentrate only on relevent targets.

---

<div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>
Understand how operating systems manage files, memory, and processes. This knowledge helps in many security scenarios.
</div>
