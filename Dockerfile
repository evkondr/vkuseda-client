# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.11

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-bullseye-slim as build
# Set working directory for all build stages.
WORKDIR /app
# Copy files
COPY --chown=node:node . .
# Run build
RUN npm install && npm run build

FROM nginx:1.25.4-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]