## Description

Adidas Hector Code Challenge

The code has been structured in a monorepo using NestJS framework.

In **apps** folder we can see 3 different folders for each service. Also we can see **env** folder where we will save the .env file for each NODE_ENV

In **libs** folder we have **shared** this acts as a library with functionality which is shared across the services.

I have used latests node LTS version (16.13.0)

## Installation

We need to have node installed (v16.13.0 recommended). In order to run in docker we will also need to have Docker for windows installed

First we need to install al dependencies in package.json running:

```bash
$ npm install
```

## Running the app locally

If we want to run it locally we can use for each different service the following commands. Also you need to have mongo installed and configure local.env files with host and port and pass in the script NODE_ENV=local and the APP_NAME (this is already done in the scripts)

Note that email-service needs in dist folder the templates but even I setup the compiler options it does not add the assets so I am doing a xcopy, In case you want to run it locally in Linux please run the correspondent script.

```bash
# public-service
$ npm run start:public-service

# subscription-service
$ npm run start:subscription-service

# email-service
$ npm run start:email-service
$ npm run start:email-service:linux
```

In order to run it in docker we have to build and then run the docker-compose file. Here configure the .env files.

```bash
# build
$ docker-compose build

# start
$ docker-compose up
```

## Test

Some tests has been coded but not implemented.

## More info

tokens

-   I created 2 different tokens, PUBLIC and PRIVATE token. With PUBLIC you can access to PublicAuthGuard enpoints and with PRIVATE to all of them

email-service

-   Should be secured but I made it accessible exposing port 3002 to be able to check.
-   Also the GET endpoint of this service is made to check the templates.
-   Maling functions has been coded but not tested

## Stay in touch

-   Author - [Hector Landete](https://github.com/hlandete)
