FROM node

WORKDIR /app

ADD . /app

USER node

RUN npm install

EXPOSE 5000

CMD [ "node", "index.js" ]
