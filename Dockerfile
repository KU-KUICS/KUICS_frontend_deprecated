FROM node:12

WORKDIR /KUICS_frontend

COPY package.json /KUICS_frontend
RUN npm install

ARG CACHEBUST=1
COPY . /KUICS_frontend
CMD npm run build && npm run serve

EXPOSE 3000
