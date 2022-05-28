FROM node:18.2.0
WORKDIR /app

# Install Dependencies
COPY package*.json ./
RUN npm install

# Build app
COPY . .
RUN npm run build -- bot

# Run app
CMD ["node", "dist/apps/bot/main.js"]