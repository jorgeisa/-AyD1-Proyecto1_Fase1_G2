FROM node:alpine

# create & set working directory
RUN mkdir -p /src
WORKDIR /src

# copy source files
COPY . /src

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3000
CMD npm run start