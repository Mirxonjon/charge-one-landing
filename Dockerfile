FROM node:22.11.0 as builder

WORKDIR /app

COPY package*.json ./

COPY next.config.ts ./

RUN npm install

COPY . .
RUN npm run build

FROM node:22.11.0-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3003

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts

EXPOSE 3002

CMD ["npm", "start"]
