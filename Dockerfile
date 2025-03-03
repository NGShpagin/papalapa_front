FROM node:13 as build
WORKDIR /papalapa/front
COPY ./papalapa/front/package.json ./package.json
RUN npm install
COPY . .
WORKDIR /papalapa
RUN npm i
WORKDIR /papalapa/front
ARG env=prod
RUN PUBLIC_URL=http://:3001 npm run build