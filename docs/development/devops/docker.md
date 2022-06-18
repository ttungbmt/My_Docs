# Docker

## Installation

## Push Image to Docker Hub
```shell
# Log into the Docker public registry
docker login

# Tag the image
docker tag workspace:latest becagis/workspace:latest

# Publish the image
docker push becagis/workspace:latest
```

## Command

```shell
# Stop containers and remove volumes
docker-compose down -v

# Force kill all containers by running
docker kill $(docker ps -q)

# Remove all containers
docker rm $(docker ps -a -q)

# Remove all docker images
docker rmi $(docker images -q)

# Remove all dangling docker volumes
docker volume rm $(docker volume ls -qf dangling=true)

# Prune the old images
docker system prune -a

# update all images, should be run regularly to fetch published updates
for i in $(docker images| awk 'NR>1{print $1":"$2}'| grep -v '<none>'); do docker pull "$i" ;done

# Get Docker Host IP
ip addr show | grep "\binet\b.*\bdocker0\b" | awk '{print $2}' | cut -d '/' -f 1
echo $(ip -4 addr show docker0 | grep -Po 'inet \K[\d.]+')

# List all Docker Container Names and their IPs
docker ps -q | xargs -n 1 docker inspect --format '{{ .Name }} {{range .NetworkSettings.Networks}} {{.IPAddress}}{{end}}' | sed 's#^/##';

# List Docker Container Names and their IPs
docker inspect mynginx | grep IPAddress



docker system df
docker ps --size
```

