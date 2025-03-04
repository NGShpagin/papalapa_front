FROM node:20-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package-lock.json package-lock.json
COPY package.json package.json
RUN npm install
#RUN npm run build
COPY . .
RUN npm run build
#CMD ["npm", "start"]
#CMD [ "npm", "run", "preview" ]

# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]