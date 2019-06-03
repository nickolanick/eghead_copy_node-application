FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install


COPY . .

EXPOSE 8080


CMD [ "npm", "build" ]
CMD [ "npm", "populate" ]
CMD [ "npm", "start" ]