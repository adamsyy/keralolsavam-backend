FROM node:18-slim

WORKDIR /app
EXPOSE 80

RUN git clone https://github.com/jaison080/keralolsavam-backend.git . && \
    npm install

CMD nodemon ./pull.js & npm start