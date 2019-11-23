# https://jdlm.info/articles/2019/09/06/lessons-building-node-app-docker.html

# use specyfic version to avoid errors when lts or any other tag changes
FROM node:12.13.0 AS development

# create and chown our workdir
RUN mkdir /srv/app && chown node:node /srv/app

# install nest cli
RUN npm i -g @nestjs/cli

# run as unprivilaged user "node" from here, there is some trick to that for linux users
USER node

# /srv is for site-specific data which is served by this system
WORKDIR /srv/app

# cache only packaging file changes, not app source code
COPY --chown=node:node package.json yarn.lock ./

# install dependencies
RUN yarn install

# prevent from creating this folder by docker compose (it will do that as root)
# so if there are no deps then we need to make sure our node user is going to own node_modules
RUN mkdir -p node_modules

# it includes only the system dependencies needed to run a node application
FROM node:12.13.0-slim AS production

RUN mkdir /srv/app && chown node:node /srv/app

USER node

WORKDIR /srv/app

# do not copy files listed in .dockerignore
COPY --chown=node:node . .

# owned by root, so the node user can read but not write them
COPY --from=development --chown=root:root /srv/app/node_modules ./node_modules

RUN yarn build

CMD ["yarn", "start:prod"]