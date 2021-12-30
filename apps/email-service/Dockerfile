FROM node:12.19.0-alpine3.9 AS development

ARG PORT
WORKDIR /usr/src/app

COPY ./package*.json ./
COPY ./apps/email-service/docker.env ./.env
COPY ./apps/email-service/templates ./templates

RUN npm install 

COPY dist/apps/email-service/ .

CMD ["node", "main"]

EXPOSE $PORT