# Nmap

## What is Nmap

- Nmap is a network scanning tool  
- used to discover hosts and services  
- widely used in cybersecurity and CTF  

---

## Basic Scan

```
nmap <target>
```

---

## Scan with Service Detection

```
nmap -sV <target>
```

---

## Scan All Ports

```
nmap -p- <target>
```

---

## OS Detection

```
nmap -O <target>
```

---

## Aggressive Scan

```
nmap -A <target>
```

---

## Fast Scan

```
nmap -F <target>
```

---

## Scan Specific Ports

```
nmap -p 80,443 <target>
```

---

## Scan a Range of IPs

```
nmap 192.168.1.1-100
```

---

## Scan a Subnet

```
nmap 192.168.1.0/24
```

---

## Disable Ping

```
nmap -Pn <target>
```

---

## SYN Scan

```
sudo nmap -sS <target>
```

---

## UDP Scan

```
sudo nmap -sU <target>
```

---

## Save Output

```
nmap -oN result.txt <target>
```

---

## XML Output

```
nmap -oX result.xml <target>
```

---

## Timing

```
nmap -T4 <target>
```

---

## Verbose

```
nmap -v <target>
```

---

## Combine Options

```
nmap -A -T4 -p- <target>
```

---

## Use Case

- find open ports  
- identify services  
- reconnaissance  

---

## Simple Flow

1. scan target  
2. find ports  
3. identify services  