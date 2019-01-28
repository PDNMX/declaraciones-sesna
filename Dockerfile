FROM node:10-alpine

MAINTAINER Sergio Rodríguez <sergio.rdzsg@gmail.com>

ADD . /declaraciones-sesna
WORKDIR /declaraciones-sesna

RUN yarn add global yarn \
&& yarn install \
&& yarn cache clean

EXPOSE 8080

CMD [ "yarn", "dev-server" ]
