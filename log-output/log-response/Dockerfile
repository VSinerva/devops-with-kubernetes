FROM node:24-alpine
WORKDIR /src/app
COPY package* ./
RUN npm ci
COPY . .
CMD [ "npm", "start" ]
