# Router, Switch and Hub

## Router

- A device that connects multiple packet-switched networks and directs data packets to their correct destinations.
- Enables multiple devices to share an internet connection.
- Types of Network a router connects:
  - LAN( Local Area Network)
  - WAN( Wide Area Network)
- It acts like an air traffic controller for data packets making sure they reach the correct destination.
- It reads the Packet Header, Consults the routing table, forwards the packet.
- Types of Router:
  Basics Routers:
  - Wireless Router: Connects to modem via Ethernet and creates a WLAN using radio signals.
  - Connects to modem via Ethernet and forms a LAN using physical cables.
    Specialized Routers:
  - Core Router: handles high-volume data traffic within large networks.
  - Edge Router: Located at the network boundary, connects internal networks to external ones using BGP.
  - Virtual Router: A software-based router that can act as a backup using VRRP.

## Hub

- It is a networking device that connects multiple hosts in a network, functioning as a multi-port repeater.
- It operates at Layer 1 (Physical Layer) of the OSI model and facilitates data transfer between devices using either twisted part or fiber optic cables.
- Hubs do not manage traffic intelligently they simply broadcast data to all connected devices.
- It functions as multi-port repeater, broadcasting data to all connected devices in half-duplex mode.
- Comes in 4 to 24 ports and has three types: Active, Passive and intelligent hubs.
- Advantages or hub:
  - Connectivity: Allows multiple clients to connect and communicate in a network.
  - Performance: Minimal impact on network performance due to its broadcast model.
  - Device Support: Supports different media types and speeds.
  - Area Coverage: Extends network range for better communication.
- Disadvantages of hub:
  - Collision Domain: Increases the chances of packet collisions within the network.
  - Half-Duplex Mode: Cannot operate in full-duplex data can only be sent or received at a time.
  - Limited Scalability: Cannot efficiently support large networks like token ring.
  - High network Traffic: Does not reduce traffic, leading to congestion.
  - Bandwidth Sharing: All devices share the same bandwidth, slowing down the network.

## Switch

- A switch is a network device that segments networks into subnets or LAN segments.
- I filters and forwards packets based on MAC addresses.
- With multiple ports, it examines the destination address and processes data accordingly.
- It supports unicast, multicast and broadcast communication.
- Features of Network Switches:
  - Operates at the Data Link Layer of the OSI Model and uses packet-switching techniques for data transfer.
  - Performs error checking before forwarding data and ensures data reaches only the intended device.
  - Supports full-duplex communication and allocated limited bandwidth to each LAN segment.
  - Handles unicast, multicast and broadcast transmissions.
  - Comes with multiple ports for better connectivity.

- Types of switches:
  - Virtual Switches: Used in Virtual Machine(VM) environment to manage traffic between VMs.
  - Routing Switches: Connect LANs and operate at the Network Layer, enabling routing functionality.
  - Unmanaged Switches: Simple plug-and-play switches used in small networks automatically passing data without manual configuration.
  - Manages Switches: Advanced switches used in large networks and SNMP-based configuration, offering better security and control.
  - Smart Switches: Partially managed switches with some control over data transmission but with limitations compared to fully managed switches.
  - LAN Switches: Also called Ethernet or data switches, they prevent packet collisions by efficiently allocating bandwidth.
  - PoE Switches: Power over Ethernet (PoE) switches that transmit both and power over the same cable, commonly used in Gigabit Ethernet networks.
  - Stackable Switches: Can be connected via a backplane to function as a single logical switch.
  - Modular Switches: Allow the addition of extra modules/cards for better flexibility and scalability.

- Layer 2 Switch:
  - A layer 2 switch operates at the Data Link Layer (Layer 2) of the OSI model and forwards data based on MAC addresses.
  - It is commonly used in LANs to create separate collision domains and reduce congestion.
  - The switch identifies the correct port using MAC addresses to send data to the appropriate destination device.
- Layer 3 switch:
  - Combines the functionality of regular switch and a router, operating at both the Data Link Layer and Network Layer of the OSI model.
  - It can route packets between different subnets or VLANs using IP addresses, similar to how router work.
  - This makes Layer 3 switches ideal for large networks, as they provide both fast switching and routing capabilities in a single device.

- Unmanaged switch:
  - It is a basic plug-and-play network device that automatically enables communication between Ethernet devices.
  - It is typically used in home networks or small businesses where the network design in simple and there’s no need for complex configurations.
  - Unmanaged switches are easy to install and use but lack advanced features or configurations options, making them convenient choice for basic networking needs.
- Managed switch:
  - A managed switch offers advanced features and greater control over network configurations compared to an unmanaged switch.
  - It allows network administrations to set up, monitor and manage the network for better performance and security.
  - Managed switches support remote management via SNMP(Simple Network Management Protocol) and include features like VLANs, QoS(Quality of Service), and redundancy options, making them ideal for complex and large-scale networks.

<div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>
Take notes while learning. Writing down commands, observations, and mistakes will improve your long-term understanding.
</div>