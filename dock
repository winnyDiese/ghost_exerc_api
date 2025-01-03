FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

# Copier les fichiers nécessaires pour installer les dépendances
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent

# Installer les dépendances de développement (comme les types)
RUN npm install --save-dev @types/cors --silent

# Copier tous les fichiers du projet
COPY . .

# Compiler les fichiers TypeScript
RUN npm run build

EXPOSE 3001

RUN chown -R node /usr/src/app
USER node

CMD ["node", "dist/index.js"]
