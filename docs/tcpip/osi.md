# OSI Layer

- It describes the seven layers that computer system uses to communicate over a network.
- Each layer interacts with the layer directly above and below it and encapsulates the data transmitting in a structured manner.
- Problems can be isolated to a specific layer.

<div style="background:#1e2633; border-radius:8px; padding:18px; margin:20px 0; border-left:5px solid #4da3ff; text-align:center;">

<strong>OSI 7 Layer</strong>
<br> <br>
<img src="/assets/images/networking/osi-layer.png"  alt="osi layer - TCP Handbook" style="max-width:100%; border-radius:6px;">
</div>

## 1. Application Layer(Layer 7)

- It provides as proxy between the user application and the network services.
- Function includes: Resources sharing, remote file access, network management.
- Protocols: HTTP( web browsing), FTP( file transfers), SMTP(email services), DNS( resolving domain names to IP addresses).

## 2. Presentation Layer(Layer 6)

- It is also known as the syntax layer.
- Responsible for translating data between the application layer and the network format.
- It handles data formatting, encryption compression between different systems.
- It includes encryption protocols to ensure data security during transmission and compression protocols to reduce the amount of data for efficient transmission.
- Protocols includes: SSL(Secure Socket Layer), TLS(Transport Layer Security), Compression Protocols, Data Formatting and Encoding Protocols, etc.

## 3. Session Layer(Layer 5)

- Manages and controls the connection between computers.
- Establishes and maintains and terminates connections ensuring the data exchanges occurs in an organized manner.
- Ensures data flow in the correct way between application.
- Session checkpointing and recovery which allows to resume communication in case of failure.
- Properly ends a session when communication is complete.
- Protocols includes: NetBIOS: (communication between applications on a LAN), RPC(Remote Procedure Call): allows a program to execute a procedure on another computer.

## 4. Transport Layer( Layer 4)

- The transport layer ensures the end-to-end delivery of messages between applications.
- It receives the data from the application layer, segments it and adds source and destination ort numbers before sending the data to the network layer.
- It manages flow control, error control and retransmission if needed.
- At the receiver's end, it reassembles the data, reads the port number and delivers it to the appropriate application.
- Many applications use default port numbers, such as port 80 for web servers.
- Common transport layer protocol include TCP, UDP, NetBIOS and PPTP.
- Services provided by Transport Layer: Connection-Oriented Service, Connectionless Service.

## 5. Network Layer(Layer 3)

- It is responsible for transmitting data between hosts across different network.
- It handles packet routing, selecting the shortest available path for efficient data transfer.
- It adds the sender and receiver’s IP address to the packet header, ensuring proper delivery.
- Networking devices like routers and switches implement the network layer.
- The two key functions includes:
  - Routing: determines the best path for data transmission.
  - Logical Addressing: assigns unique IP addresses to devices for identification across networks.

## 6. Data Link Layer(Layer 2)

- The data link layer ensures node-to-node delivery of messages and error-free data transfer over the physical layer.
- It uses MAC addresses to transmit packets to the correct host.
- Data units at this layer are called frames and common devices include switches and bridges.
- The data link layer is divided into two sublayers:
  - Logical Link Control(Logical Link Control): It manages error detection and flow control.
  - Media Access Control(MAC): It handles access to the physical transmission medium.
- The data link layer divides packets from the network layer into **frames** based on the NIC’s frame size.
- It also encapsulates the sender and receiver's MAC addresses in the header.
- The receiver’s MAC address is obtained using **ARP**, which asks “Who has this IP?” The destination host replies with its MAC address.
- Functions of the data link layer:
  - Framing: Defines frame boundaries using special bit patterns.
  - Physical Addressing: Adds sender/receiver MAC address in the frame header.
  - Error Control: Regulates data transmission to prevent data loss or corruption.
  - Access Control: Determines which device can use the shared communication channel.

## 7. Physical Layer(Layer 1)

- It is the lower layer of the OSI model, responsible for the physical connection between devices.
- It transmits individual bits as signals over the medium
- When receiving data, it converts signals into 0s and 1s and sends them to the Data Link Layer for reassembly.
- Common device at this layer includes hubs, repeaters, modems and cables.
- Functions of the Physical Layer:
  - Bit Synchronization: Provides a clock to synchronize bits between sender and receiver.
  - Bit Rate Control: Defines the transmission rate(bit per second).
  - Physical Topologies: Specifies the arrangement of devices in the network(e.g. bus, star, mesh topologies).
  - Transmission Mode: Defines the flow of data between devices (simplex, half-duplex, full-duplex).


<div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>

Cybersecurity is best learned through practice. Try every tool, command, and concept in a safe lab environment.

Build your skills step-by-step: understand the fundamentals, practice regularly, and document what you learn.
</div>