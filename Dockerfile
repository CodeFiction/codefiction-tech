FROM php:fpm
RUN apt-get update
RUN apt-get install -y git