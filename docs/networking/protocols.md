# Network Communication Protocols

### HTTP (Hypertext Transfer Protocol)

- Application layer protocol used to transfer web pages on the World Wide Web.
- Works using a client-server model.
- It is a stateless protocol meaning it does not store session information.
- Used for loading websites and transferring web data.
- Default Port: 80 (TCP)

### TCP (Transmission Control Protocol)

- Transport layer protocol that provides reliable and ordered data delivery.
- Establishes a connection before transmission data.
- Uses acknowledgements and error detection to ensure reliability.
- Commonly used by HTTP, FTP and email services.
- No specific port (transport protocol used by many services)

### UDP (User Datagram Protocol)

- Transport layer protocol that provides fast but unreliable data transmission.
- It does not establish a connection before sending data.
- Faster than TCP but not guarantee delivery or order.
- Commonly used in streaming, gaming and broadcasting.

### BGP (Border Gateway Protocol)

- Routing protocol used to exchange routing information between autonomous system on the Internet.
- Determines how data travels between different networks.
- Critical for global Internet routing.
- Default Port: 179 (TCP)

### ARP (Address Resolution Protocol)

- Maps IP addresses to MAC addresses in a local network.
- Helps devices locate each other in a LAN.
- Maintains an ARP cache for IP-MAC mappings.
- Essentials for packet delivery inside a local network.
- Operates between Layer 2 and Layer 3

### IP (Internet Protocol)

- Network layer protocol responsible for addressing and routing packets across networks.
- Uses IP addresses to identify devices.
- Provides connectionless, best-effort delivery.
- Forms the foundations of Internet communication.
- Layer 3 protocol

### DHCP (Dynamic Host Configuration Protocol)

- Automatically assigns IP addresses and network configuration to devices.
- Provides subnet mask, gateway and DNS information.
- Reduces manual network configuration.
- Simplifies network administration.
- Ports:
  - 67 (UDP) - Server
  - 68 (UDP) - Client
<div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>
Use version control like Git to track your projects and notes. This helps you manage changes and collaborate effectively.
</div>