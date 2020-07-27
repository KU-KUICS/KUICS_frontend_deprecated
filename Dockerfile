FROM node:12

WORKDIR /kuics-frontend

ARG CACHEBUST=1

CMD yarn serve

EXPOSE 5000
