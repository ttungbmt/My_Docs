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
