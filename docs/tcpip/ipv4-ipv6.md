# IPv4 and IPv6 addresses

<div style="background:#1e2633; border-radius:8px; padding:18px; margin:20px 0; border-left:5px solid #4da3ff; text-align:center;">
<strong>IPV4</strong>
<br> <br>
<img src="/assets/images/networking/ipv4.png"  alt="IPV4 - TCP Handbook" style="max-width:100%; border-radius:6px;">
</div>

- It uses 32-bit addresses allowing for over 4 billion unique addresses.
- They are written in four decimal-separated octets like 192.168.1.1.

## IPv4 features:

- 32-bit addressing: supports about 4.3 billion unique addresses.
- Dot-Decimal Notation: Written as four decimal numbers separated by dots(e.g. 192.168.1.1.).
- Packet Structure: Comprises a header(for routing) and a payload(data).
- Checksum Fields: Ensures header integrity through error-checking.
- Fragmentation: Splits packets if they are exceed the MTU.
- ARP: Maps IP address to hardware (MAC) addresses.
- Address Configuration: Supports both manual setup and dynamic assignment via DHCP.
- Limited Address Space: Led to IPv6 development due to demand for more addresses.
- NAT: Allows multiple devices to share a single public IP.
- Security: Lacks built-in security, relying on external protocols like IPSec.

## Limitations:

- Limited Address Space: Cannot support the growing number of internet-connected devices.
- Complex Configurations: Rrquire manual setup or DHCP, which can be error-prone.
- Less Efficient Routing: the IPv4 header adds complexity, slowing down data processing.
- Security Issues: Lacks built-in security, requiring extra measures for protection.
- Limited QoS( Quality of Service): Struggles to prioritize data for real-time applications like VoIP(Voice over Internet Protocol) and video steam.
- Fragmentation: Packet fragmentation can reduce efficiency and increase data loss risks.
- Broadcasting Overhead: Uses broadcasting, leading to excessive network traffic and reduces performance.
<br>
<br>

<div style="background:#1e2633; border-radius:8px; padding:18px; margin:20px 0; border-left:5px solid #4da3ff; text-align:center;">
<strong>IPV6</strong>
<br> <br>
<img src="/assets/images/networking/ipv6.png"  alt="IPV6 - TCP Handbook" style="max-width:100%; border-radius:6px;">
</div>

- IPv6 is the newer version of the IP, designed to replace IPv4 due to the growing number of devices.
- 128-bit addresses allow for a virtually unlimited number of unique IPs, compares to IPv4’s 32-bit system.
- IPv6 addresses are written in 8 groups of 4 hexadecimal digital separated by colons(e.g. `2001:0db8::1`).
- It improves routing efficiency and address management, supporting the expanding internet and mobile/IoT devices.
- To switch from IPv4 to IPv6, there are several strategies:
  - Dual Stacking: Devices use both IPv4 and IPv6 simultaneously, allowing communication with networks using either version.
  - Tunneling: IPv6 traffic is sent through an IPv4 network, creating a “tunnel” to reach other IPv6 users.
  - NAT( Network Address Translation): Translates between IPv4 and IPv6 addresses, enabling communication between devices using different versions.

## IPv6 Characteristics:

- Larger Address Space: Uses 128-bit addresses, providing a vast number of unique addresses.
- Efficient Header and Routing: Fewer header field and advances routing protocols (OSPFv3, RIPng) improve processing.
- No Broadcasts: Supports Unicast, Multicast and Anycast, reducing network traffic and enhancing efficiency.
- Flexible Configuration: Devices can self-assign IPs using SLAAC or use DHCPv6, with fragmentation handled by the sender.

<div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>
Start with fundamentals. Understanding networking, Linux, and how the internet works will make advanced cybersecurity concepts much easier to grasp.
</div>