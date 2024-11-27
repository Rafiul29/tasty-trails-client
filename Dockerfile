FROM node:18-alpine AS build
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json ./

RUN npm install --silent
# Copy app files
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server to serve static files
FROM nginx:stable-alpine AS production

# Copy the built Vite app from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]


# sudo chmod 666 /var/run/docker.sock
# sudo chown $USER /var/run/docker.sock