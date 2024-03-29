FROM node:14

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install 

# Copying source files
COPY . /usr/src/app

# Building app
RUN npm run build
RUN npm run build-storybook
EXPOSE 3000

# Running the app
CMD ["npm", "run", "dev"]