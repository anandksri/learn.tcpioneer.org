# Assessment Methodology : Information Gathering

## Information Gathering

- It is the first and most important phase of Penetration Testing where the tester gathers as much information as possible about the targeted system before attempting any attacks.
- The main purpose of information gathering is to understand the target environment and identify potential entry points that could be used during later stages of the penetration test.
- By analyzing the collected information, the tester can lean about the target’s infrastructure, technologies, domains, IP addresses and services.
- Helps tester to build a clear picture of the target’s attack surface and allows them to plan more effectively instead of blindly attacking in the targeted environment.

### Steps of Information Gathering

- Performed through a series of steps that allows a tester to collect information about the target system or organization/
- Helps the tester to understand the structure of target environment and identify possible attack surface

1. Target Identification
   - First step is identifying the target domain, application or network that will be assessed. This target becomes the starting point for all further reconnaissance activities. Understanding the scope of the target helps to make sure that the tester focuses only on authorized system during the assessment.
2. Domain Registration Information

   In this step. the tester gathers information related to the registration details of the domain. This includes information about the domain owner, registrar, creation date, expiration date and name servers. These details can provide ideas of the organization that is responsible for managing the domain.

3. DNS Enumeration

   Involves collecting the information about the Domain Name System (DNS) records associated with the target domain. These records can reveal important information such as IP addresses, mail server and name servers. Understanding DNS records helps testers map the network structure that is connected to the domain.

4. Subdomain Discovery

   Organizations often hosts multiple services under different subdomains. During these steps, the tester attempts to identify these subdomains in order to explant the attack surface. Finding additional subdomains may reveal development environments, APIs or other services that can be potential entry points.

5. Technology Identification

   Tester identifies the technologies used by the target website or application such as web servers programming language, frameworks or content management systems. Understanding the technology stack can help determine whether known vulnerabilities may exist in the technologies that is being used.

6. Network and Service Identification

   Tester analyzes the target system too identify active hosts, open ports and running service. Each service running on a system may show a possible point of entry, making this step important for identifying potential vulnerabilities’

7. Email and Employee Information gathering

   Collecting publicly available email information can provide ideas into the organizational structure, departments and key personnel. This information may also help to identify potential targets for security assessments like phishing simulators or social engineering tests.

### Types of Information Gathering

### Passive Information Gathering

- Method of collecting information about a target without directly interacting with the targeting system.
- Penetration tester gathers data from publicly available sources so that no traffic or requests are sent to the target. Because of this, passive information gathering is difficult for organization to detect.
- Main goal is to obtain useful details about the targets such as domain names, IP addresses, employee information, technology used, email addresses, and DNS records.
- Helps the tester understand the targeted environment and identify possible attack points before moving to more active testing.
- Common Tool includes:
  - Whois:
    - Passive recon tool used to query database that store domain registration details. Helps find out who own a domain name, when it was registered and other administrative and technical information.
    - Web based whois:

- Taking Example of tesla.com:

- Command based: `whois google.com`

- dig:
  - dig is a passive recon tool used to query DNS server and retrieve detailed information about domain names and their DNS records.
  - Example: `dig google.com`

-
- DNS Query Result: The command `dig google.com` asked the DNS server for the A record (IP address) of `google.com`.
- Resolved IP Address: The DNS response shows that google.com resolves to the IP address `142.250.67.206`.
- Query Details: The request was answered successfully (`NOERROR`) by the DNS server 8.8.8.8 in 123 milliseconds.

- Wayback Machine:
  - The Wayback Machine (from Internet Archive) allows testers to view archived versions of websites from the past. This can reveal old pages, directories, API endpoints, or sensitive information that may no longer be visible on the current site.
