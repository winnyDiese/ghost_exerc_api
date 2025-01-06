# Utiliser une image de Node.js 18
FROM node:18

# Définir l'environnement de production
ENV NODE_ENV=production

# Définir le répertoire de travail dans l'image Docker
WORKDIR /usr/src/app

# Copier package.json et package-lock.json (ou npm-shrinkwrap.json) pour installer les dépendances
COPY package*.json ./

# Installer toutes les dépendances (y compris celles de développement)
RUN npm install

# Copier tout le reste du projet dans le conteneur
COPY . .

# Compiler les fichiers TypeScript
RUN npm run build

# Exposer le port sur lequel l'API écoutera
EXPOSE 3001

# Changer les permissions des fichiers
RUN chown -R node:node /usr/src/app

# Passer à un utilisateur non privilégié pour des raisons de sécurité
USER node

# Commande pour démarrer l'application après la compilation
CMD ["node", "dist/index.js"]
