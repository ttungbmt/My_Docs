# Python

- https://www.linuxcapable.com/how-to-install-python-3-10-on-ubuntu-22-04-lts/

Check if Python 3.10 is available by running
```shell
apt list | grep python3.10
```

## Installation

```shell
sudo apt update && sudo apt upgrade -y
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt install -y software-properties-common build-essential
sudo apt install -y python3
sudo apt install -y python3-pip python3-dev python3-virtualenv python3-venv virtualenvwrapper
```

Install version 3.10

```shell
sudo apt update && sudo apt upgrade -y
sudo apt install software-properties-common -y
sudo add-apt-repository ppa:deadsnakes/ppa -y
sudo apt update
sudo apt install python3.10 -y
python3.10 --version
# Install development headers for building C extensions
sudo apt install python3.10-dev -y
# Install the standard library (venv) module:
sudo apt install python3.10-venv -y
# Install the standard library (distutils) module:
sudo apt install python3.10-distutils -y
# Install the (2to3.3.10) utility as well as the standard library (lib2to3) module:
sudo apt install python3.10-lib2to3 -y
# Install the standard library (tkinter) module:
sudo apt install python3.10-tk -y
```

## Create a Virtual Environment
```shell
mkdir ~/test_app && cd ~/test_app
python3.10 -m venv test_app_venv
source test_app_venv/bin/activate

# To exit the virtual environment
deactivate
```


## Get 