# SSH
## Installation
```shell
sudo apt-get install openssh-server
sudo systemctl enable ssh
sudo systemctl start ssh

# Check port SSH
netstat -nltp | grep sshd

# Configure firewall and open port
sudo ufw allow ssh
sudo ufw enable
sudo ufw status
```
## Connecting to a server
```shell



# Method 1
ssh -p PORT USERNAME@IP

ssh USERNAME@IP -i ~/.ssh/rsa_key.pub
# Method 2
sshpass -p PASSWORD ssh -p PORT USERNAME@

```

## Setting Up SSH Keys
```shell
ssh-keygen
ssh-copy-id -i ~/.ssh/id_rsa.pub USERNAME@IP
```

## Disable Strict Host Key Checking
Method 1
```shell
ssh -o StrictHostKeyChecking=no user@remote-host
```

Method 2:
```shell
vi ~/.ssh/config
sudo chmod ~/.ssh/config
```
```shell
Host *
    StrictHostKeyChecking no
```

## Configure

```shell
Host *
  StrictHostKeyChecking no
  UserKnownHostsFile=/dev/null

Host homestead
  HostName 192.168.10.10
  User vagrant
  Port 22
  IdentityFile ~/.ssh/insecure_private_key
```

