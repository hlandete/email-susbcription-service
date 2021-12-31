FROM node:16.13.0

ENV NODE_ENV=docker 
ARG PORT
WORKDIR /usr/src/app

COPY ./package*.json ./
COPY ./apps/env/email-service/docker.env ./.env
COPY ./apps/email-service/templates ./templates

RUN npm install 

COPY dist/apps/email-service/ .

CMD ["node", "main"]

EXPOSE $PORT