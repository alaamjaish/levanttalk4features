# Use Node.js 18 as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Build the app
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV CI=true

# Debug commands
RUN node --version
RUN npm --version
RUN ls -la
RUN npm run build

# Start the app
EXPOSE 3000
CMD ["npm", "start"]
