# Network Discovery Protocols

- It is the process of identifying devices on network, enabling communication between them.
- It helps administrators manage devices, create network map, enforce access policies and monitor I P address usage.
- Importance of Network Device
  - Identifies all connected devices including routers, switches, firewall and employee devices.
  - Helps IT team quickly locate network outages and fix downtime issues.
  - Handles the complexity of wired, wireless, and virtual networks.
  - Detects unauthorized devices and potential cyber threats like rouge IPs.
  - It maps open port that could be exploitable by attackers.
- How network device discovery Works:
  - By using protocols and scanning techniques to identify, map and monitor devices in a network.
  - Uses discovery protocols: Common Protocols like SNMP, ICMP (ping sweeps) and IP scans helps locate and identify network devices.
  - Automated Devices Mapping: Discovery tools automatically scan and add devices to a monitoring database, allowing admins to tract IP ranges, subnet and network topology.
  - Quality of Experience (QoE) monitoring: Uses packet analysis sensors to check device performance, response time and packet loss.
  - Hardware health insights: Tools provide real-time data on hardware issues like power supply or temperature, helping with troubleshooting.
  - Centralized dashboards: A single dashboard provides all network device information one place, making it easier to monitor and manage devices.
- Network discovery and monitoring protocols:
  - Simple Network Management Protocol (SNMP): A widely-sed protocol that helps IT admins monitor and gather data about devices on the network also enables devices to share information within LAN or WAN environments.
  - LLDP (Link Layer Discovery Protocol): A vendor-neutral protocol that allows devices to send data to neighboring devices. The data is stored in management information databases (MIB) and can be quickly queried using SNMP.
  - Ping: A utility that tests that reachability of devices or IP addresses by sending ICMP queries. It measures round-trip time, packet loss and provides statical data to assist in network device discovery.

<div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>
Use tools like Wireshark to observe network traffic. Seeing how data moves across a network builds strong intuition.
</div>