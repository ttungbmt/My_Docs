# Vagrant

```shell
# vagrant box add ADDRESS --box-version VALUE --provider PROVIDER
vagrant box add ubuntu/focal64 --provider=virtualbox
vagrant box list
vagrant init ubuntu/focal64 


```

## Cheat Sheet
```shell
# List the installed boxes
vagrant box list
# Add the box for later use
vagrant box add <name> <box path/HTTP URI>
# Delete a box
vagrant box remove <name> virtualbox
# Check for updates vagrant box update
vagrant box outdated

# Starts vagrant environment (also provisions only on the FIRST vagrant up) Equivalent to pressing the power buttons on your servers.
vagrant up
# Outputs status of the vagrant machine
vagrant status
# Stops the vagrant machine
vagrant halt
# Restarts vagrant machine, loads new Vagrantfile configuration
vagrant reload
# Forces reprovisioning of the vagrant machine
vagrant provision
vagrant provision --provision-with ssh
# Connects to machine via SSH
vagrant ssh
# Stops and deletes all traces of the vagrant machine
vagrant destroy
# Suspends a virtual machine (remembers state)
vagrant suspend
# Resume a suspended machine (vagrant up works just fine for this as well)
vagrant resume
# Restart the virtual machine and force provisioning
vagrant reload --provision
# Use the debug
vagrant provision --debug


# Get the vagrant version
vagrant -v
# outputs status of all vagrant machines
vagrant global-status
# same as above, but prunes invalid entries
vagrant global-status --prune
# Vagrant can be configured to deploy code!
vagrant push
# Runs vagrant up, forces provisioning and logs all output to a file
vagrant up --provision | tee provision.log
# Use the environement variable VAGRANT_LOG to set verbosity
VAGRANT_LOG=info vagrant up

# Show location boxes
ls C:\Users\MTX\.vagrant.d\boxes

# Remove aLL your local Vagrant Boxes
vagrant box list | cut -f 1 -d ' ' | xargs -L 1 vagrant box remove -f
```