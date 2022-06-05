FROM node:18.2.0
WORKDIR /app

# Install Dependencies
COPY package*.json ./
RUN npm install

# Build app
COPY . .
RUN npm run build -- importer

# Run app
CMD ["node", "dist/apps/importer/main.js"]