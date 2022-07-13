# Laravel

## Installation


```shell
composer create-project laravel/laravel example-app
```

## Composer
Add the Composer repository to your composer.json
```shell
# Using VCS Type
composer config repositories.nova '{"type": "vcs", "url": "git@github.com:becagis/laravel-nova.git"}' --file composer.json
# Using Composer Type
composer config repositories.nova '{"type": "composer", "url": "https://nova.laravel.com"}' --file composer.json
```

Create a Composer auth.json file
```shell
composer config http-basic.nova.laravel.com ttungbmt@gmail.com your-license-key
```