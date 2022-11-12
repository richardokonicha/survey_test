# FROM node:14-alpine AS development
FROM node:16-alpine
# ENV NODE_ENV development
WORKDIR /app
COPY ./package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
EXPOSE 3000
# CMD [ "yarn", "start" ]
CMD yarn start
