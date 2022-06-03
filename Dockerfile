###############
# BUILD STAGE #
###############

FROM node:18.2.0-alpine3.14

# Select working directory
WORKDIR /usr/src/app

# Disable npm update message
RUN npm config set update-notifier false

# Install app dependencies
COPY package*.json ./
RUN npm ci

# Copy files
COPY . .

# Run build
RUN npm run build


#############
# RUN STAGE #
#############

FROM nginx:stable

# Select working directory
WORKDIR /usr/share/nginx/html

# Copy the build files to the container
COPY --from=0 /usr/src/app/dist .

# Copy the nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose the web server port
EXPOSE 80