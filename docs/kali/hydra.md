# Hydra

## What is Hydra

- Hydra is a password cracking tool  
- used for brute force attacks  
- supports multiple protocols  

---

## Basic Syntax

```
hydra -l <user> -P <wordlist> <target> <service>
```

---

## SSH Example

```
hydra -l admin -P rockyou.txt ssh://<target>
```

---

## FTP Example

```
hydra -l admin -P rockyou.txt ftp://<target>
```

---

## HTTP Login Example

```
hydra -l admin -P rockyou.txt <target> http-post-form
```

---

## RDP Example

```
hydra -l admin -P rockyou.txt rdp://<target>
```

---

## Use Username List

```
hydra -L users.txt -P rockyou.txt ssh://<target>
```

---

## Use Password List

```
hydra -l admin -P passwords.txt ssh://<target>
```

---

## Stop After First Found

```
hydra -f -l admin -P rockyou.txt ssh://<target>
```

---

## Verbose Output

```
hydra -V -l admin -P rockyou.txt ssh://<target>
```

---

## Specify Port

```
hydra -l admin -P rockyou.txt -s 22 <target> ssh
```

---

## Use Case

- brute force login  
- test weak passwords  
- used in CTF and penetration testing  

---

## Simple Flow

1. find service (using nmap)  
2. choose wordlist  
3. run hydra  
4. get credentials  