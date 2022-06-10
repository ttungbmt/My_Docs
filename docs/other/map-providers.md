# Map Providers

## Add Basemap (XYZ Tile)
### Google Maps

Base URL = `https://mt1.google.com/vt/lyrs=m&z={z}&x={x}&y={y}&hl=vi`

Basic Parameter Configuration:
1. mt0, mt1, mt2 = The servers you can choose, or just simply use "mt" for automatic load balancer
2. lyrs
    - h = roads only (available google layers, may be there are others, check the Google Maps API documentation)
    - m = standard roadmap
    - p = terrain
    - r = somehouse altered roadmap
    - s = satellite only
    - t = terrain only
    - y = hybrid
3. hl = Your country code (as long as google support it, hl means Host Language) (en - English, fr - France,...)

### Other
| Name      | URI  |
| ----------| ---- |
| OSM | http://tile.openstreetmap.org/{z}/{x}/{y}.png |
| Mapbox | https://thuduc-maps.hcmgis.vn/thuducserver/gwc/service/wmts?layer=thuduc:thuduc_maps&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y} |
| Vietbando | http://images.vietbando.com/ImageLoader/GetImage.ashx?LayerIds=RC_VN&Level={z}&X={x}&Y={y} |
| BecaMaps | https://thuduc-maps.hcmgis.vn/thuducserver/gwc/service/wmts?layer=thuduc:thuduc_maps&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y} |
| ThuducMaps | https://thuduc-maps.hcmgis.vn/thuducserver/gwc/service/wmts?layer=thuduc:thuduc_maps&style=&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y} |