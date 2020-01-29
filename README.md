## Development

### Building & Running dev container as well as modifying app

```
# build all images
docker-compose build
# install deps
docker-compose run --rm app yarn
# run all containers as deamons
docker-compose up
# kill containers
docker-compose down
# work on one time app container
docker-compose run --rm app bash
# install app dependencies
node@xxx:/srv/app$ npm install --save typescript
```

## Production

### Building & Running production container

```
docker build . -t meeting-planner:latest
docker run --rm meeting-planner:latest
```

## Tooling

Please install [Prettifier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugis in your VSCode IDE
