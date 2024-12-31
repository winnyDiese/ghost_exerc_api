# Utilisation de l'image officielle de Node.js basée sur Alpine
FROM node:lts-alpine

# Définir l'environnement en production
ENV NODE_ENV=production

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers nécessaires pour installer les dépendances
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent

# Copier tous les fichiers du projet
COPY . .

# Compiler les fichiers TypeScript
RUN npm run build

# Exposer le port de l'application
EXPOSE 3001

# Modifier les permissions des fichiers pour l'utilisateur 'node' et changer d'utilisateur
RUN chown -R node /usr/src/app
USER node

# Démarrer l'application
CMD ["node", "dist/index.js"]
