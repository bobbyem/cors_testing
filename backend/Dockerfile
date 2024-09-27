FROM node:18

WORKDIR /app

# Kopiera package.json och installera dependencies
COPY package*.json ./
RUN npm install

# Kopiera resten av koden
COPY . .

# Exponera backend-porten
EXPOSE 3000

# Starta Node.js-applikationen
CMD ["npm", "run", "dev"]
