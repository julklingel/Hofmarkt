# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm


# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN pnpm install


# Bundle app source
COPY . .

RUN npx prisma generate # Generate Prisma Client
# Creates a "dist" folder with the production build
RUN pnpm build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
