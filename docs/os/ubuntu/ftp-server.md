# FTP Server

- https://techviewleo.com/configure-vsftpd-ftp-server-on-ubuntu-linux/

## Installation

### Step 1: System Update
```shell
sudo apt update && sudo apt upgrade -y 
```

#### Step 2: Install Vsftpd
```shell
sudo apt install vsftpd
sudo systemctl status vsftpd
```

### Step 3: Create FTP User and Directory
```shell
sudo adduser ftpuser

sudo mkdir -p /home/ftpuser/ftpdir
sudo chmod -R 750 /home/ftpuser/ftpdir
sudo chown ftpuser: /home/ftpuser/ftpdir
# To allow user access to the vsftpd server, add FTP user to the /etc/vsftpd.user_list file
sudo bash -c 'echo ftpuser >> /etc/vsftpd.user_list'
```

### Step 4: Configure Vsftpd FTP Server

```shell
sudo cp /etc/vsftpd.conf /etc/vsftpd.conf_default
sudo micro /etc/vsftpd.conf
```

```shell
anonymous_enable=NO
local_enable=YES
write_enable=YES
chroot_local_user=YES
pasv_min_port=30000
pasv_max_port=31000
userlist_enable=YES
userlist_file=/etc/vsftpd.user_list
userlist_deny=NO
```

```shell
sudo systemctl restart vsftpd
```

Run the ftp command followed by your server IP to test your ftp connection

```
$ ftp 192.168.56.118
Connected to 192.168.56.118.
220 (vsFTPd 3.0.3)
Name (192.168.56.118:frank): ftpuser
331 Please specify the password.
Password: <ENTER PASSWORD>
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.

ftp> ls
200 PORT command successful. Consider using PASV.
150 Here comes the directory listing.
drwxr-x---    2 1001     1001         4096 Feb 11 00:39 ftpdir
226 Directory send OK.
ftp>
```

### Step 5: Configure Vsftpd FTP Server
Now, allow FTP traffic on port 20, FTP data on port 21, and passive connection with vsftpd on ports 30000-31000.
```shell
sudo ufw status
sudo ufw allow 20:21/tcp
sudo ufw allow 30000:31000/tcp
```

Reload firewall to take effect
```shell
sudo ufw disable
sudo ufw enable
sudo ufw status
```







