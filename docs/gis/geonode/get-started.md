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

:::danger Error

- Login Geoserver: Mismatching redirect URI.

:::


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

---------------------

## GeoPortal 

`exec: "/usr/src/geonode/entrypoint.sh": permission denied: unknown`

Run command to set permissions
```shell
sudo chmod -Rf 775 ~/VNTT/GeoPortal33
```

Add file

```yaml
version: '3.4'

services:

  django:
    build: .
    # Loading the app is defined here to allow for
    # autoreload on changes it is mounted on top of the
    # old copy that docker added when creating the image
    volumes:
      - '.:/usr/src/app'
    environment:
      - DEBUG=False
      - GEONODE_LB_HOST_IP=geoportal.local
      - GEONODE_LB_PORT=90
      - SITEURL=http://geoportal.local:90/
      - GEOSERVER_PUBLIC_LOCATION=http://geoportal.local:90/geoserver/
      - GEOSERVER_WEB_UI_LOCATION=http://geoportal.local:90/geoserver/

  celery:
    build: .
    volumes:
      - '.:/usr/src/app'
    environment:
      - DEBUG=False
      - GEONODE_LB_HOST_IP=geoportal.local
      - GEONODE_LB_PORT=90
      - SITEURL=http://geoportal.local:90/
      - GEOSERVER_PUBLIC_LOCATION=http://geoportal.local:90/geoserver/
      - GEOSERVER_WEB_UI_LOCATION=http://geoportal.local:90/geoserver/

  geoserver:
    environment:
      - GEONODE_LB_HOST_IP=geoportal.local
      - GEONODE_LB_PORT=90
  

  geonode:
    environment:
      # - HTTPS_HOST=${HTTPS_HOST}
      - HTTP_HOST=geoportal.local
    ports:
      - "90:80"
      - "4490:443"
```

Edit .env

```apacheconf
GEONODE_CLIENT_LAYER_PREVIEW_LIBRARY=mapstore # react, leaflet, mapstore
MAPBOX_ACCESS_TOKEN=pk.eyJ1IjoidHR1bmdibXQiLCJhIjoiY2t3ZGFqeTJxMGlscDJ2cG45MmNtam5hbSJ9.L-f-WvMUFZSDvbw07xUlZA

DEFAULT_MAP_CENTER_X=
DEFAULT_MAP_CENTER_Y=
DEFAULT_MAP_ZOOM=
```

```shell
ADMIN_SITE_HEADER = "Django administration"
ADMIN_SITE_TITLE = "My shiny new administration"
ADMIN_INDEX_TITLE = "Site administration"
```

Edit urls.py

```shell
from django.contrib import admin
from django.conf import settings

admin.site.site_header = settings.ADMIN_SITE_HEADER
admin.site.site_title = settings.ADMIN_SITE_TITLE
admin.site.index_title = settings.ADMIN_INDEX_TITLE
```

- https://docs.geonode.org/en/master/admin/mgmt_commands/index.html