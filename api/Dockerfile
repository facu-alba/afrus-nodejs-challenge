FROM node:18

RUN apt-get update && apt-get install -y \
    nano

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma

RUN npx prisma generate

COPY . .

EXPOSE 3001

CMD ["node", "src/server.js"]