FROM node:16.13.0
ENV NODE_ENV=docker 

WORKDIR /usr/src/app

COPY ./package*.json ./
COPY ./apps/env/public-service/docker.env ./.env

RUN npm install 

COPY dist/apps/public-service/ .

CMD ["node", "main"]

EXPOSE 3000
