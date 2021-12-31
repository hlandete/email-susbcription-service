FROM node:16.13.0
ARG APP_NAME
ARG PORT
ENV NODE_ENV=docker    
WORKDIR /usr/src/app

COPY ./package*.json ./
COPY ./apps/env/subscription-service/docker.env ./.env

RUN npm install 

COPY dist/apps/subscription-service/ .

CMD ["node", "main"]

EXPOSE $PORT