# Disk Usage

```shell
# Show free and used space on mounted filesystems
df -h

# Better way
df -h /

# Display total disk usage off the current directory
du -sh
du -sh ~

# Show directory space usage, only one level deep.
du -h --max-depth=1
du -h --max-depth=1 ~  | sort -n
```

