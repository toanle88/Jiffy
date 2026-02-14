---
title: Docker
tags: [devops, containers, infrastructure]
---

# Docker Cheatsheet

## 🐳 Container Management

### Lifecycle
| Command | Description |
|---------|-------------|
| `docker run <image>` | Create and start a container |
| `docker run -d <image>` | Run container in background (detached) |
| `docker start <id>` | Start a stopped container |
| `docker stop <id>` | Stop a running container |
| `docker restart <id>` | Restart a container |
| `docker kill <id>` | Kill a running container immediately |
| `docker rm <id>` | Remove a stopped container |
| `docker rm -f <id>` | Force remove a running container |

### Info & Logs
| Command | Description |
|---------|-------------|
| `docker ps` | List running containers |
| `docker ps -a` | List all containers (including stopped) |
| `docker logs <id>` | Show container logs |
| `docker logs -f <id>` | Follow container logs |
| `docker inspect <id>` | View detailed container configuration |
| `docker top <id>` | List processes running inside container |
| `docker stats` | Live usage stats for all containers |

### Interaction
| Command | Description |
|---------|-------------|
| `docker exec -it <id> sh` | Connect to container shell (Alpine/others) |
| `docker exec -it <id> bash` | Connect to container bash shell |
| `docker cp <id>:<path> <host_path>` | Copy file from container to host |
| `docker cp <host_path> <id>:<path>` | Copy file from host to container |

---

## 📦 Images

| Command | Description |
|---------|-------------|
| `docker images` | List local images |
| `docker pull <image>` | Download image from registry |
| `docker build -t <name> .` | Build an image from Dockerfile |
| `docker rmi <image>` | Delete an image |
| `docker rmi -f <image>` | Force delete an image |
| `docker image prune` | Remove unused (dangling) images |
| `docker history <image>` | Show image history |
| `docker tag <image> <new_tag>` | Tag an image |

---

## 🌐 Networks

| Command | Description |
|---------|-------------|
| `docker network ls` | List networks |
| `docker network create <name>` | Create a user-defined network |
| `docker network rm <name>` | Remove a network |
| `docker network inspect <name>` | View network details |
| `docker network connect <net> <id>` | Connect container to network |
| `docker network disconnect <net> <id>` | Disconnect container from network |

---

## 💾 Volumes

| Command | Description |
|---------|-------------|
| `docker volume ls` | List volumes |
| `docker volume create <name>` | Create a volume |
| `docker volume rm <name>` | Delete a volume |
| `docker volume inspect <name>` | View volume details |
| `docker volume prune` | Remove all unused volumes |

---

## 🐙 Docker Compose

| Command | Description |
|---------|-------------|
| `docker-compose up` | Start services |
| `docker-compose up -d` | Start services in background |
| `docker-compose down` | Stop and remove services/networks |
| `docker-compose ps` | List containers for current project |
| `docker-compose logs -f` | Follow logs for all services |
| `docker-compose exec <service> sh` | Connect to service shell |
| `docker-compose build` | Rebuild services |

---

## 🧹 Cleanup (Use with Caution)

| Command | Description |
|---------|-------------|
| `docker system prune` | Remove unused data (stopped containers, unused networks, dangling images) |
| `docker system prune -a` | Remove ALL unused data (including unused images) |
| `docker system prune --volumes` | Prune volumes as well |

---
*Created with ❤️ for DevOps*
