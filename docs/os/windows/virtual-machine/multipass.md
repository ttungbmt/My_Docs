# Multipass


## Create an instance
```shell
multipass find

# Create an instance with a custom name
multipass launch 22.04 --name mu22

# Create an instance with custom CPU number, disk, and RAM
multipass launch --cpus 4 --disk 20G --mem 8G

# Create an instance with primary status
multipass launch kinetic --name primary

multipass info keen-yak
```



## Remove an instance

### Move an instance to the ‘recycle bin’
```shell
# Mark an instance as deleted
multipass delete keen-yak

# Move all instances to the recycle bin
multipass delete --all

# Recovere an instance
multipass recover keen-yak

# Show all instances
multipass list
```

### Remove an instance permanently
```shell
# Method 1
multipass delete keen-yak
multipass purge

# Method 2
multipass delete keen-yak --purge

multipass list
```

### Mount
```shell
multipass mount . docker:/project/
```

### SSH
Copying our public key to to the list of authorized keys of the instance
```shell
multipass exec primary -- bash -c "echo $(cat ~/.ssh/id_rsa.pub) >> ~/.ssh/authorized_keys"
```

### Troubleshooting
If you are having some issues getting your cloud-config file to work correctly, you can check for clues in the log files.

These are located at:
- **/var/log/cloud-init.log**: The actual process logs for cloud-init’s processing of the configuration files.
- **/var/log/cloud-init-output.log**: Any output produced by the processing of the configuration can be found here.