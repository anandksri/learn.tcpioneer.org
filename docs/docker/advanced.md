# Advanced Concepts

## Dockerfile

- file used to build docker images

example:

FROM ubuntu  
RUN apt update  
CMD ["echo", "hello"]

---

## Volumes

- used to store data permanently
- data is not lost when container stops

---

## Networks

- used for communication between containers

---

## Port Mapping

- connect container port to host

```
docker run -p 8080:80 <image-name>
```

---

## Logs

```
docker logs <container-id>
```

---

## Restart Container

```
docker restart <container-id>
```

---

## Remove All Containers

```
docker rm $(docker ps -aq)
```

---

## Remove All Images

```
docker rmi $(docker images -q)
```

---

## Simple Flow

1. pull image
2. run container
3. make changes
4. build image
5. push to docker hub
