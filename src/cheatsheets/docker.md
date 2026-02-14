---
title: Docker
tags: [devops, containers]
---

# Docker Cheatsheet

## Containers

### List running containers
```bash
docker ps
```

### List all containers
```bash
docker ps -a
```

### Stop a container
```bash
docker stop <container_id>
```

## Images

### List images
```bash
docker images
```

### Build an image
```bash
docker build -t <image_name> .
```
