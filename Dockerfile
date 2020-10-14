# stage build
FROM node:10-alpine as builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

# stage deploy
FROM nginx:stable-alpine
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
