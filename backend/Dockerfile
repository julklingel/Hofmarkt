FROM node:18-alpine

RUN apk update && \
    apk add curl

RUN npm install -g pnpm

# Switch to the root user temporarily
USER root

WORKDIR /usr/src/app

# Set the permissions and switch back to the node user
RUN chmod 777 /usr/src/app && chown node:node /usr/src/app
USER node

COPY --chown=node:node package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --force

COPY --chown=node:node . .
RUN chmod +x ./entrypoint.sh

RUN npx prisma generate
RUN pnpm build

ENV NODE_ENV production

ENTRYPOINT ["./entrypoint.sh"]
CMD ["node", "dist/src/main.js", "start:migrate:prod"]
