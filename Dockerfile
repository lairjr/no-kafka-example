FROM node:latest

WORKDIR /home/app

COPY package.json .
COPY yarn.lock .
COPY /app .

RUN yarn install

CMD yarn start
