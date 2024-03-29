###############
# BUILD STAGE #
###############

FROM node:18.2.0-alpine3.14

# Select working directory
WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm

# Install app dependencies
# See: https://pnpm.io/cli/fetch
COPY pnpm-lock.yaml ./
RUN pnpm fetch

# Copy files
COPY . .

# Install using preinstalled dependencies
RUN pnpm install -r --offline

# Run build
RUN pnpm build


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