FROM php:7.2.6-alpine
RUN apk update && \
    apk upgrade && \
    apk add --update --no-cache \
        freetype-dev \
        libjpeg-turbo-dev \
        mysql-client \
        g++ \
        make \
        autoconf \
    && pecl install xdebug-2.6.0beta1 \
    && docker-php-ext-enable xdebug \
	&& docker-php-ext-install -j$(nproc) mysqli pdo pdo_mysql \
	&& docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
	&& docker-php-ext-install -j$(nproc) gd
