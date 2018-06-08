# This is wordpress development sample
## Version

Mysql
: 5.7.21

Wordpress
: 4.9.6

Webpack
: 4.11.1

## Setup

```
docker-compose up -d
docker-compose exec db mysql -uroot -ppassword -e 'CREATE DATABASE `wp` CHARACTER SET=utf8mb4 COLLATE utf8mb4_bin;'
```

## Wp setting
- Visit to [http://localhost:8000](http://localhost:8000).
- Sample theme name is `sample`.
