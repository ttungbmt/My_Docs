# Docker

```shell
# Display the version of docker installed:
docker version
```

```shell
docker-compose start CONTAINER
docker-compose stop CONTAINER

docker-compose pause CONTAINER
docker-compose unpause CONTAINER

docker-compose ps
docker-compose up CONTAINER
docker-compose down CONTAINER


docker-compose -f <docker-compose-file> up
```

Show Docker IPs

```shell
docker ps -q | xargs -n 1 docker inspect --format '{{ .Name }} {{range .NetworkSettings.Networks}} {{.IPAddress}}{{end}}' | sed 's#^/##';

docker inspect mynginx | grep IPAddress
```

```shell
docker system df
docker ps --size
```