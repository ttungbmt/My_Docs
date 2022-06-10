# PostgreSQL

### Adds a geometry column

```shell
SELECT AddGeometryColumn ('public', 'my_table', 'geom', 4326, 'POINT', 2);
```

### Spatial Indexing

```shell
CREATE INDEX my_table_geom_idx ON my_table USING GIST (geom);

DROP INDEX my_table_geom_idx;
```

### Natural sort

```shell
create or replace function natural_sort(text)
    returns bytea language sql immutable strict as $f$
    select string_agg(convert_to(coalesce(r[2], length(length(r[1])::text) || length(r[1])::text || r[1]), 'SQL_ASCII'),'\x00')
    from regexp_matches($1, '0*([0-9]+)|([^0-9]+)', 'g') r;
$f$;
```

### Fulltext Search

