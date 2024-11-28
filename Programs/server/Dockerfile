# BaseImage
FROM node:18

# set workdirectory
WORKDIR /app

# copy the host's package.json to the workdirectory
COPY package*.json ./

# 
RUN npm install

# `client`ディレクトリのみコピー
COPY ./server .

# set the listening PORT
EXPOSE 5000

# launch command
CMD ["npm", "start"]
