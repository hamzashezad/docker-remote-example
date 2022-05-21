FROM node:16-alpine

WORKDIR app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY app.js app.js

EXPOSE 3000/tcp

CMD ["node", "app.js"]
