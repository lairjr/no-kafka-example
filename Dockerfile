FROM node:latest

WORKDIR /home/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

CMD yarn start
