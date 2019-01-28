FROM node:10-alpine

MAINTAINER Sergio Rodríguez <sergio.rdzsg@gmail.com>

ADD . /declaraciones-sesna
WORKDIR /declaraciones-sesna

RUN yarn add global yarn \
&& yarn install \
&& npm install http-server -g \
&& yarn webpack \
&& yarn cache clean

EXPOSE 8080

CMD [ "http-server" ]
