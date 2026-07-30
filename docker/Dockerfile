FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install --omit=dev

USER node

CMD [ "npm", "start" ]

EXPOSE 5000 docker run -p 5000:5000 my-node-app
docker push usmanali0805/dockerpractiseimage:latest