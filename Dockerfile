FROM node:14

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . .

RUN npm install

EXPOSE 3001

CMD ["npm", "start"]