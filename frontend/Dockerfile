# Stage 1: Build the React app
FROM node:18 AS build

WORKDIR /app

# Kopiera package.json och installera dependencies
COPY package*.json ./
RUN npm install

# Kopiera resten av app-koden och bygg den
COPY . .
RUN npm run build

# Stage 2: Serve the React app with a lightweight web server
FROM nginx:alpine

# Kopiera byggresultatet från dist-mappen istället för build
COPY --from=build /app/dist /usr/share/nginx/html

# Exponera port 80 för att nå webbservern
EXPOSE 80

# Starta Nginx
CMD ["nginx", "-g", "daemon off;"]
