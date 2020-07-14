FROM node:12

WORKDIR /KUICS_frontend

ARG CACHEBUST=1

COPY package.json /KUICS_frontend
COPY yarn.lock /KUICS-frontend
RUN yarn install

COPY . /KUICS_frontend
CMD yarn build && yarn serve

EXPOSE 3000
