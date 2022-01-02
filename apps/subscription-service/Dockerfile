FROM node:16 AS build
ARG ENV

ENV NODE_ENV=$ENV 

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm ci --build

COPY . .

RUN npm run build:subscription-service

FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --production

COPY --from=build /usr/src/app/dist/apps/subscription-service .
COPY --from=build /usr/src/app/apps/subscription-service/.env .


CMD ["node", "main"]

EXPOSE 3002