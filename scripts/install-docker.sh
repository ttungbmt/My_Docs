#!/bin/sh

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

# Install Docker Compose
rm -rf /usr/local/bin/docker-compose/docker-compose-linux-x86_64
curl -s https://api.github.com/repos/docker/compose/releases/latest | grep browser_download_url  | grep docker-compose-linux-x86_64 | cut -d '"' -f 4 | wget -qi -
chmod +x docker-compose-linux-x86_64
rm -rf ./docker-compose-linux-x86_64.sha256
sudo mv docker-compose-linux-x86_64 /usr/local/bin/docker-compose

# Add your user account to docker group.
sudo usermod -aG docker $USER
newgrp docker

# Fix permissions (unix:///var/run/docker.sock )
sudo chmod 666 /var/run/docker.sock
sudo systemctl restart docker