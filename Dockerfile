# build environment
FROM node:18-alpine3.14 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.21-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]