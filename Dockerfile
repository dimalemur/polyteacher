FROM node:12.18.3

RUN mkdir -p /usr/src/polyteacher/
WORKDIR /usr/src/polyteacher/

COPY . /usr/src/polyteacher/
# RUN npm install

EXPOSE 3000

CMD [ "npm","run","dev" ]

# docker run --name polyteacher --rm -p 3000:3000 -e TZ=Europe/Moskow polyteacher 

# docker run --rm -d -p 27017:27017 mongo -запустить контейнер с базой данных