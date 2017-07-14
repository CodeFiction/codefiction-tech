FROM teracy/angular-cli

MAINTAINER codefiction

ENV HOME=/usr/src/app

RUN mkdir $HOME

COPY package.json $HOME/

WORKDIR $HOME

RUN rm -rf node_modules && npm install && npm cache clean && rm -rf ~/.npm