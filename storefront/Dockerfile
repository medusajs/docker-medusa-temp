FROM node:latest

WORKDIR /app/storefront

RUN apt-get update

RUN npm install -g npm@latest

RUN npm install -g gatsby-cli

RUN npm install sharp

ENTRYPOINT ["./develop.sh" ]