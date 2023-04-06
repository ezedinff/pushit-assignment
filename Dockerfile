# Use Node.js LTS version
FROM node:16-alpine

# Set working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json for both apps and the shared library
COPY package*.json

# Install dependencies for both apps and the shared library
RUN npm install

# Copy entire Nx workspace to the container
COPY . .

# Build both apps and the shared library
RUN npm run build api
RUN npm run build video-player
RUN npm run build common

# Set up Nginx for serving the Angular app
FROM nginx:1.21.0-alpine

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration for serving the Angular app
COPY nginx.conf /etc/nginx/conf.d/

# Copy the built Angular app from the previous stage
COPY --from=0 /app/dist/video-player /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
