FROM node:10-alpine as builder

WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/html/html
EXPOSE 80
CMD ["nginx", "-g", "deamon off;"]

