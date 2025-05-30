# backend_app/Dockerfile
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001
# Perintah CMD di sini akan di-override oleh docker-compose.yml jika ada command di sana
CMD [ "npm", "run", "dev" ]