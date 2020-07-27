FROM node:12

WORKDIR /kuics-frontend

ARG CACHEBUST=1

COPY package.json /kuics-frontend
COPY yarn.lock /kuics-frontend
RUN yarn install

COPY . /kuics-frontend
RUN yarn build
CMD yarn serve

EXPOSE 5000
