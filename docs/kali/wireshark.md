# Wireshark

## What is Wireshark

- Wireshark is a network packet analyzer  
- used to capture and inspect network traffic  
- widely used in debugging, analysis, and CTF  

---

## Start Wireshark

```
wireshark
```

---

## Capture Packets

- select network interface  
- click start capture  

---

## Stop Capture

- click stop button  

---

## Common Filters

HTTP traffic:

```
http
```

TCP traffic:

```
tcp
```

Specific IP:

```
ip.addr == <target>
```

Specific Port:

```
tcp.port == 80
```

---

## Follow TCP Stream

- right click on packet  
- follow → TCP stream  

---

## Search in Packets

- press Ctrl + F  
- search string or value  

---

## Export Files

- File → Export Objects  
- choose HTTP / SMB  

---

## Save Capture

```
File → Save As
```

---

## Use Case

- analyze network traffic  
- capture credentials  
- debug applications  
- investigate attacks  

---

## Simple Flow

1. start capture  
2. apply filters  
3. analyze packets  
4. extract data  
