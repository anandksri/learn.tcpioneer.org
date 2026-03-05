
# Wireshark

## What is Wireshark

- **Wireshark** is one of the most widely used **network packet analyzers**.
- It is used to **capture, inspect, and analyze network traffic in real time**.
- Wireshark allows users to see exactly what is happening on a network at the packet level.

Wireshark is commonly used by:

- network engineers
- cybersecurity professionals
- penetration testers
- incident responders
- CTF players

It helps in:

- troubleshooting network issues
- analyzing protocols
- detecting malicious traffic
- investigating security incidents

Because of its deep packet inspection capabilities, Wireshark is considered a **core tool for network analysis and cybersecurity investigations**.

---

## Install Wireshark

Wireshark is usually pre-installed in **Kali Linux**.

To check installation:

```
wireshark --version
```

If not installed:

```
sudo apt install wireshark
```

---

## Start Wireshark

To start Wireshark from the terminal:

```
wireshark
```

After launching:

1. Wireshark interface will open
2. A list of available **network interfaces** will appear
3. Choose the interface connected to the network

Examples:

- eth0
- wlan0
- lo (loopback)

---

## Capture Packets

To capture network packets:

1. Open Wireshark
2. Select the **network interface**
3. Click the **Start Capture** button (blue shark fin icon)

Wireshark will now begin capturing **live network traffic**.

Captured packets will appear in three sections:

| Section | Description |
|------|------|
| Packet List | Shows captured packets |
| Packet Details | Shows protocol breakdown |
| Packet Bytes | Raw packet data |

---

## Stop Capture

To stop capturing packets:

1. Click the **Stop Capture** button
2. Packet capture will pause

Stopping capture allows you to **analyze collected traffic without new packets being added**.

---

## Common Filters

Wireshark supports powerful **display filters** to analyze specific traffic.

### HTTP Traffic

```
http
```

Shows only HTTP packets.

---

### TCP Traffic

```
tcp
```

Displays only TCP packets.

---

### Specific IP Address

```
ip.addr == <target>
```

Example:

```
ip.addr == 192.168.1.10
```

Shows packets sent to or from the specified IP.

---

### Specific Port

```
tcp.port == 80
```

Example:

```
tcp.port == 443
```

Useful when analyzing specific services.

---

## Follow TCP Stream

Wireshark allows reconstruction of **complete TCP conversations**.

Steps:

1. Right-click a packet
2. Select:

```
Follow → TCP Stream
```

This feature shows the **entire communication between client and server**.

Useful for:

- reading transmitted data
- extracting credentials
- analyzing application behavior

---

## Search in Packets

To search inside captured traffic:

Press:

```
Ctrl + F
```

You can search for:

- strings
- hexadecimal values
- packet details

Example search:

```
password
```

This helps locate sensitive information in packet captures.

---

## Export Files

Wireshark can extract transferred files from captured traffic.

Steps:

1. Go to:

```
File → Export Objects
```

2. Choose protocol type:

- HTTP
- SMB
- FTP

3. Select file
4. Save it locally

This is commonly used in **forensics and CTF challenges**.

---

## Save Capture

To save captured packets:

```
File → Save As
```

Wireshark saves files in:

```
.pcap
.pcapng
```

These files can later be analyzed or shared with other tools.

---

## Useful Wireshark Filters

| Filter | Purpose |
|------|------|
| http | HTTP traffic |
| dns | DNS requests |
| tcp | TCP packets |
| udp | UDP packets |
| ip.addr | Filter by IP |
| tcp.port | Filter by port |

Example:

```
dns
```

Displays DNS queries.

---

## Simple Analysis Workflow

Typical Wireshark analysis process:

### Step 1 — Start Packet Capture

Select interface and start capture.

---

### Step 2 — Generate Network Traffic

Open websites or run applications to generate packets.

---

### Step 3 — Apply Filters

Example:

```
http
```

This reduces noise and shows relevant packets.

---

### Step 4 — Inspect Packets

Examine:

- headers
- payloads
- protocol details

---

### Step 5 — Extract Data

Use:

- Follow TCP Stream
- Export Objects
- Search functionality

---

## Use Cases

Wireshark is commonly used for:

- network troubleshooting
- packet inspection
- malware analysis
- credential capture in labs
- network forensics
- protocol debugging
- CTF challenges

---

## Best Practice

Packet analysis should only be performed in **authorized environments**.

Safe practice platforms:

- TryHackMe
- Hack The Box
- PortSwigger Labs
- OWASP Juice Shop
- cybersecurity labs

Never capture network traffic **without permission**.

---

## Summary

Wireshark is one of the **most powerful network traffic analysis tools**.

It allows professionals to:

- inspect network packets
- analyze protocols
- troubleshoot connectivity issues
- investigate security incidents

Mastering Wireshark is an important step for anyone learning **network security and cybersecurity analysis**.

<div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>
Try explaining concepts to others. Teaching is one of the most effective ways to strengthen your knowledge.
</div>