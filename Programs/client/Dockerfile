# BaseImage
FROM node:18

# set workdirectory
WORKDIR /app

# copy the host's package.json to the workdirectory
COPY package*.json ./

# 
RUN npm install

# `client`ディレクトリのみコピー
COPY ./client .

# set the listening PORT
EXPOSE 3000

# launch command
CMD ["npm", "start"]
