# Stage 1: building the process
FROM node:7.10 as build-deps
WORKDIR /root/app/svngoku.io
COPY package.json yarn.lock  ./
RUN npm
COPY .  ./
RUN npm build

# Stage 2: Go to production
FROM nginx:1.12-alpine
COPY --from=build-deps /root/app/svngoku.io/dist  /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



