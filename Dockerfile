FROM node:current-alpine
RUN mkdir -p /usr/src/miniws
COPY . /usr/src/miniws/
WORKDIR /usr/src/miniws/
RUN npm install
ENTRYPOINT [ "node","app.js" ]