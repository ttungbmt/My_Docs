# Docker

## Installation
Install Docker CE
```shell
# Update System
sudo apt -y update

# Install basic dependencies
sudo apt -y install apt-transport-https ca-certificates curl gnupg-agent software-properties-common

# Remove old versions
sudo apt remove docker docker-engine docker.io containerd runc

# Import Docker repository GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/docker-archive-keyring.gpg

# Add Docker CE repository to Ubuntu
sudo add-apt-repository -y "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# Install Docker CE
sudo apt -y update
sudo apt -y install docker-ce docker-ce-cli containerd.io
```
Install Docker Compose v2

```shell
mkdir -p ~/.docker/cli-plugins/
curl -SL https://github.com/docker/compose/releases/download/v2.3.3/docker-compose-linux-x86_64 -o ~/.docker/cli-plugins/docker-compose
chmod +x ~/.docker/cli-plugins/docker-compose
```

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


## Check space

```shell
docker system df

# Space used by each container, image and volume
docker system df -v

# Filter only >= 1GB
docker system df -v | grep GB

# Space used by running containers
docker ps -s
```