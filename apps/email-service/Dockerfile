FROM node:12.19.0-alpine3.9 AS development
ARG APP_NAME
ARG PORT
WORKDIR /usr/src/app

COPY ./package*.json ./
COPY ./apps/email-service/.env ./

RUN npm install glob rimraf

RUN npm install 

COPY dist/apps/email-service/ .

CMD ["node", "main"]

EXPOSE $PORT