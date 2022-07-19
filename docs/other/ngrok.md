# Ngrok

## Installation
Install ngrok via Chocolatey
```shell
choco install ngrok
```

Install ngrok via ZIP file [Download](https://ngrok.com/download)

## Connect your account
Access dashboardand get autoken: https://dashboard.ngrok.com/

Running this command will add your authtoken to the default ngrok.yml configuration file
```shell
ngrok config add-authtoken 2C92ixsFAzc77vAdq8QaA7RAGxS_6vzqDxnFzeujy1tsnjrxc
```

## Fire it up

```shell
ngrok http 84
ngrok http foo.dev:84
ngrok http --basic-auth="username:password" 84
ngrok http --region=us --hostname=dev.example.com 8000
ngrok start --config=./ngrok.yml myapp
ngrok start --config=./ngrok.yml --all
```

### Config Ngrok
- https://ngrok.com/docs/ngrok-agent/config#config-ngrok
- https://ngrok.com/docs/secure-tunnels

```yaml
version: "2"
authtoken: 2C92ixsFAzc77vAdq8QaA7RAGxS_6vzqDxnFzeujy1tsnjrxc
tunnels:
  dev:
    proto: http
    addr: dev.local:84
```

Run commands
```shell
ngrok start dev        # start tunnel named 'dev' in the configuration file
ngrok start web blog   # start tunnels named 'web' and 'blog'
ngrok start --all
```