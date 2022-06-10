---
title: Get Started
---

# Geonode: Get Started

```shell
sudo adduser geonode
# The following command adds the user geonode to group sudo
sudo usermod -aG sudo geonode

su geonode
```


## Geonode 2.10.x
```shell
sudo useradd docker
sudo usermod -aG docker geonode

sudo mkdir -p ./geonode21
sudo usermod -a -G www-data geonode
sudo chown -Rf ubuntu:www-data ./geonode21
sudo chmod -Rf 775 ./geonode21

git clone https://github.com/GeoNode/geonode.git -b 2.10.x geonode21
cd geonode21
docker-compose -f docker-compose.yml -f docker-compose.override.localhost.yml pull # Error
docker-compose -f docker-compose.yml -f docker-compose.override.localhost.yml up -d # Error

docker-compose -f docker-compose.yml -f docker-compose.override.localhost.yml up --build

rm -rf geonode21
```

## Geonode 3.1.x

```shell
sudo mkdir -p ./geonode31
sudo usermod -a -G www-data geonode
sudo chown -Rf ubuntu:www-data ./geonode31
sudo chmod -Rf 775 ./geonode31

git clone https://github.com/GeoNode/geonode.git -b 3.1.x geonode31
cd geonode31
docker-compose -f docker-compose.yml pull
docker-compose -f docker-compose.yml up --build -d
```


## Geonode 3.2.x

```shell
git clone https://github.com/GeoNode/geonode.git -b 3.2.x geonode32
cd geonode32
docker-compose build --no-cache
docker-compose up -d
```

## Geonode 3.3.x
Worked
```shell
git clone https://github.com/GeoNode/geonode.git -b 3.3.x geonode33
cd geonode33
docker-compose build --no-cache
docker-compose up -d

# Error: Thumbnail
# Error: Dev (not found css/js)
```

## Geonode 4.x
Worked
```shell
git clone https://github.com/GeoNode/geonode.git -b 4.x geonode4
cd geonode4
docker-compose build --no-cache
docker-compose up -d

# Error: Thumbnail
# Error: Dev (not found js)
```
