FROM node:16.13.0 AS development
ARG ENV

ENV NODE_ENV=$ENV 

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm ci --development

COPY . .

RUN npm run build:public-service

FROM node:16.13.0  as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./


RUN npm ci --production

COPY --from=development /usr/src/app/dist/apps/public-service .
COPY --from=development /usr/src/app/apps/public-service/.env .


CMD ["node", "main"]

EXPOSE 3000