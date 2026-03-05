# Network Architectures, Mapping and Target Identification

## Network Architecture

- Network architecture defines the structure and rules for device connectivity and data transfer.
- It directly impacts network performance, requiring careful selection of equipment, bandwidth and software and is specific to and organization’s infrastructure.
- Most network follow the OSI model, dividing infrastructure into seven layer with distinct functions.
- The OSI model helps in troubleshooting by isolating network issues efficiently.
- Types of network architecture:
  - **Peer-to-peer architecture**:
    - Decentralized network where all devices(peers) have equal responsibilities and communicate directly.
    - No central server, as tasks and files are shares across the network.
    - More resilient than centralized networks since there’s no single point of failure.
    - Used in applications like blockchain due to its security and redundancy.
    - Common in small networks(e.g. home networks) but also used in large-scale distributed systems.
  - **Client-Server Architecture:**
    - Centralized network where servers provide services and clients request them.
    - Server handle multiple request efficiently due to higher processing power.
    - Server handle multiple request efficiently due to higher processing power.
    - Easier maintenance since all clients connect to a central hub.
    - It the server malfunctions, the entire network is affected.
    - Common in large network but also used in smaller setups like LANs.
  - **Hybrid Architecture:**
    - Combines client-server and peer-to-peer models, distributing some server takes to edge devices.
    - Some devices act as client, some as server and others as both, enhancing flexibility.
    - Improves efficiency by processing data closer to the source, reducing latency.
    - Commonly used in IoT due to its scalability and real-time processing.
    - Gaining popularity as IoT adoption increases.
  - **Cloud-Based Architecture:**
    - Storage and services are provided via the internet by cloud service providers.
    - No need for users to manage hardware or software infrastructure as it handled by the cloud provider.
    - Easily scale resources up or down based on demand.
    - Users can access apps and storage from anywhere with an internet connection.
    - Flexibility, cost-effectiveness and ease of maintenance.
  - **Software-Defined Networking (SDN) Architecture:**
    - Separates control and forwarding functions for easier network management.
    - Centralized Management makes it easier to introduce new services quickly and flexibly.
    - Relies on virtual networks instead of traditional hardware devices like routers and switches for traffic control.
    - More flexible compares to traditional networks, allowing dynamic changes in network configurations.
    - Easier to scale and manage due to its software-driven nature.

## Network Mapping

- Network mapping simplifies complex networks by creating diagram and charts that represent key components like hosts, switches, routers, firewalls and VLANs,
- Enhances proactive monitoring and troubleshooting.
- Helps manage expanding networks across multiple locations due to cloud computing remote work and globalization.
- Essential for large organizations including corporations and internet service providers.
- How Network Mapping Works:
    - Live diagram help IT teams detect and fix issues before they escalate.
    - Tools used probe packets across nodes to collect real-time data.
    - IT team receive alerts about connectivity issues or high traffic, enabling quick troubleshooting.
- Why network mapping is important:
    - Enhances network security and control by providing the overview of network activity, allowing them to spot and resolve security risks quickly. With real-time updates, IT teams can detect suspicious activity, unknown devices and threats enabling faster responses to potential attacks and minimizing downtime.
    - Helps resolve issues faster by allowing IT teams to pinpoint the source of issues like latency or excessive traffic. It saves time by highlighting the problematic devices directly, improving network performance and reducing downtime.
    - Leverages Auto-Discovery by using the tools like network protocols like SNMP to automatically detect new devices on the network. These tools add devices to the map, enabling admins to monitor them in real time as they connect to the network.
    - By looking the network, admins can identify bottleneck and outdated elements, enabling proactive adjustments. This allows better network optimization and more informed decisions regarding infrastructure upgrades and network planning.

 <div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>
Consistency matters more than intensity. Learning a little every day builds stronger skills than studying once in a while.
</div>   