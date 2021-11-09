FROM node:10

WORKDIR /app/medusa

COPY package.json ./

RUN npm install --loglevel=error

COPY . .

RUN npm run build &> /dev/null

EXPOSE 9000
RUN apt-get update && apt-get install -f -y postgresql-client

CMD bash check-db.sh