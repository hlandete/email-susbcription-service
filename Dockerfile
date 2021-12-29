FROM node:12.19.0-alpine3.9 AS development
ARG APP_NAME
ARG PORT
WORKDIR /usr/src/app

COPY ./package*.json ./
COPY ./apps/$APP_NAME/docker.env ./.env

RUN npm install 

COPY dist/apps/$APP_NAME/ .

CMD ["node", "main"]

EXPOSE $PORT