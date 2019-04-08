FROM node:9.2.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

RUN npm build

EXPOSE 9000

CMD ["node", "dist/index.js"]