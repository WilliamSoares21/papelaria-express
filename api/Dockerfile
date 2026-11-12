FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN --mount=type=cache,target=/root/.npm \
  npm ci --omit=dev

COPY --chown=node:node \
  app.js server.js db.js migrate.js \
  produtos.js preco.js health.js ./

USER node

EXPOSE 3001

CMD ["node", "server.js"]

