FROM teracy/angular-cli

MAINTAINER codefiction

ENV APPDIR=/usr/src/codefiction-tech

RUN mkdir $APPDIR

COPY package.json $APPDIR/

WORKDIR $APPDIR

RUN rm -rf node_modules && npm install && npm cache clean && rm -rf ~/.npm
