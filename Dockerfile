# https://jdlm.info/articles/2019/09/06/lessons-building-node-app-docker.html

# use specyfic version to avoid errors when lts or any other tag changes
FROM node:10.17.0 AS development

# install nest cli
RUN npm i -g @nestjs/cli

# create and chown our workdir
RUN mkdir /srv/app && chown node:node /srv/app

# run as unprivilaged user "node" from here, there is some trick to that for linux users
USER node

# /srv is for site-specific data which is served by this system
WORKDIR /srv/app

# it includes only the system dependencies needed to run a node application
FROM node:10.17.0-slim AS production

# install nest cli
RUN npm i -g @nestjs/cli

RUN mkdir /srv/app && chown node:node /srv/app

WORKDIR /srv/app

RUN yarn install --production

USER node

# do not copy files listed in .dockerignore
COPY --chown=node:node . .

RUN yarn build

CMD ["yarn", "start:prod"]