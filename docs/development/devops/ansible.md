# Ansible

- Puppet, Sailstack, Chef

## Installation

```shell
#!/usr/bin/env bash

apt update -y && \
    apt upgrade -y && \
    apt install -y software-properties-common

apt-add-repository -y ppa:ansible/ansible && apt update -y

apt install -y ansible

# Setting up Ansible bash completion support
apt install -y python3-argcomplete && activate-global-python-argcomplete3
```

## Configuration

`/etc/ansible/hosts`

```shell
[local]
localhost ansible_connection=local
```

```shell
ansible -i ./hosts -m ping all
ansible -i ./hosts -m ping ungroup

ansible -i ./hosts -m ping webserver
```