FROM node:18.2.0
WORKDIR /app

# Install Dependencies
COPY package*.json ./
RUN npm install

# Build app
COPY . .
RUN npm run build -- bot

FROM node:18.2.0
WORKDIR /app
COPY --from=0 /app/dist/apps/bot/* ./
CMD ["node", "main.js"]