FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# Ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm ci --only-production # npm install

# Bundle app source
COPY . ./

EXPOSE 80

# CMD [ "node", "app.js" ]
CMD [ "npm", "start"]
