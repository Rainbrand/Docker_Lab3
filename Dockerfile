FROM node:alpine

WORKDIR /usr/app/docker_lab3

COPY . .

RUN yarn install

EXPOSE 8080

CMD ["yarn", "start"]
