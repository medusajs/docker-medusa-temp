FROM node:12

WORKDIR /app/admin

COPY ["package.json", "package-lock.json", "./"]
RUN npm install

# copy the whole source folder(the dir is relative to the Dockerfile
COPY . .

CMD [ "npm", "run", "start" ]