# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.19.1

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-bullseye-slim as base
# Set working directory for all build stages.
WORKDIR /app
# Copy files
COPY --chown=node:node . .
# Run build
RUN npm install && npm run build
# Run the application.
CMD ["npm", "run", "build"]
VOLUME ["/react" ]
