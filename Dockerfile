FROM node:20-alpine AS build
WORKDIR /app
ENV PATH=/app/node_modules/.bin:$PATH
COPY package-lock.json package-lock.json
COPY package.json package.json
RUN npm install -g npm@11.2.0
RUN npm install --verbose
COPY . .
RUN npm run build

# Production Stage
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY ca.crt /etc/ssl/ca.crt
COPY papalapa-store.ru.crt /etc/ssl/papalapa-store.ru.crt
COPY papalapa-store.ru.key /etc/ssl/papalapa-store.ru.key
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]