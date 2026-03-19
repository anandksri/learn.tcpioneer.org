# Other Related Protocols

### IMAP (Internet Message Access Protocol)

- Email protocol used to **retrieve and manage emails directly on a mail server**.
- Emails remain stored on the server.
- Allows access to the same mailbox from multiple devices.
- Supports synchronization and folder organization.
- Ports:
  - 143 (TCP)
  - 993 (TCP) – Secure IMAP

### SIP (Session Initiation Protocol)

- Signaling protocol used to initiate and manage communication sessions.
- Used in VoIP, video calls, and messaging applications.
- Handles session setup, modification, and termination.
- Works with RTP to transmit media.
- **Ports:**
  - 5060 (TCP/UDP)
  - 5061 (TLS – secure)

### RTP (Real-Time Transport Protocol)

- Used to transmit real-time audio and video data over networks.
- Common in video conferencing and streaming.
- Provides sequencing and timestamps for media packets.
- Works together with SIP for communication sessions.
- Port: Dynamic UDP ports (usually 1024–65535)

### PPTP (Point-to-Point Tunneling Protocol)

- VPN protocol used for secure remote access connections.
- Encapsulates PPP traffic inside IP packets.
- Allows encrypted communication over public networks.
- Less secure than modern VPN protocols.
- Port: 1723 (TCP)

### TFTP (Trivial File Transfer Protocol)

- Lightweight file transfer protocol used for simple transfers.
- Uses UDP instead of TCP.
- Often used for network booting and firmware transfers.
- Provides minimal functionality and no authentication.
- Port: 69 (UDP)

### RLP (Resource Location Protocol)

- Protocol used to locate network resources such as printers and servers.
- Uses broadcast queries to discover available resources.
- Helps users access shared network devices.
- Used mainly in distributed network environments.
- Port: No standard port.

<div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>
Create your own lab environment using virtual machines or Docker. This allows you to safely test tools and techniques.
</div>