FROM node:latest

WORKDIR /app/storefront

COPY ["package.json", "package-lock.json", "./"]

RUN apt-get update

# RUN apt-get install -y libvips-dev libglib2.0-dev gcc g++ make

RUN npm install -g npm@latest

RUN npm install -g gatsby-cli

RUN npm install sharp

RUN npm install --loglevel=error

# copy the whole source folder(the dir is relative to the Dockerfile
COPY . .

RUN npm run build &> /dev/null

CMD [ "gatsby", "develop", "-H", "0.0.0.0",  "-p", "7000" ]