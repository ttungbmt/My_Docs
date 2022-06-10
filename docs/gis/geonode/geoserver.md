# Geoserver


Fix login failed Geonode

### Method 1: Edit via file

Edit file `${GEOSERVER_DATA_DIR}/global.xml`
```
<proxyBaseUrl>http://geoportal.local:90/geoserver</proxyBaseUrl>
```


Edit file `${GEOSERVER_DATA_DIR}/security/filter/geonode-oauth2/config.xml`
```
<userAuthorizationUri>http://geoportal.local:90/o/authorize/</userAuthorizationUri>
<redirectUri>http://geoportal.local:90/geoserver/index.html</redirectUri>
<checkTokenEndpointUrl>http://geonode:80/api/o/v4/tokeninfo/</checkTokenEndpointUrl>
<logoutUri>http://geoportal.local:90/account/logout/</logoutUri>
```

Restart Geoserver

### Method 2: Edit vi GUI
