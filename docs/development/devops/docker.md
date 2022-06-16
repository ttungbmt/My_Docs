# Docker

## Installation

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
```