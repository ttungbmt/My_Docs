# Portainer

## Deployment

```shell
docker run -d -p 9010:9000 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v ~/.becavol/portainer:/data portainer/portainer-ce:latest
```

Add **App Template** URL in Settings

[https://raw.githubusercontent.com/becagis/portainer-templates/master/becagis/templates-2.0.json](https://raw.githubusercontent.com/becagis/portainer-templates/master/becagis/templates-2.0.json)

