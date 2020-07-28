FROM node:12

WORKDIR /kuics-frontend

ARG CACHEBUST=1

COPY . /kuics-frontend
RUN yarn install

CMD yarn serve

EXPOSE 5000
