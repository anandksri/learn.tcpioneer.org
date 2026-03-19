# Network Management Protocols

### ICMP (Internet Control Message Protocol)

- Used by network devices to send error messages and operational information.
- Commonly used for ping and traceroute.
- Helps detect unreachable hosts and network problems.
- Does not carry user data.
- No port (IP protocol number 1)

### SNMP (Simple Network Management Protocol)

- Used to monitor and manage network devices.
- Uses components such as SNMP Manager, SNMP Agent and Managed Device.
- Helps monitor performance and detect faults.
- Widely used in enterprise networks.
- Ports:
    - 161 (UDP) - Queries
    - 162 (UDP) - Traps

### Gopher

- Early Internet protocol used to retrieve files from remote systems.
- Organizes files in a hierarchical menu-based structure.
- Now largely obsolete and replaced by HTTP and FTP.
- Default Port 70 (TCP)

### FTP (File Transfer Protocol)

- Used to transfer files between a client and a remote server.
- Allows uploading and downloading of files.
- Commonly used for website management and file sharing.
- Requires username and password authentication.
- Ports:
    - 21 (TCP) - Control
    - 20 (TCP) - Data (active mode)

### POP3 (Post Office Protocol v3)

- Email protocol used to retrieve emails from a mail server.
- Downloads emails to the local device.
- Emails are often deleted from the server after retrieval.
- Suitable for accessing email from a single device.
- Ports:
    - 110 (TCP)
    - 995 (TCP) - Secure POP3

### Telnet

- Remote access protocol used to **connect and control remote systems**.
- Allows command execution on a remote machine.
- Uses a **client–server model**.
- Sends data in **plain text**, making it insecure.
- Mostly replaced by SSH.
- Default Port: 23 (TCP)

<div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>
Use tools like Wireshark to observe network traffic. Seeing how data moves across a network builds strong intuition.
</div>