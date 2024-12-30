# Étape 1 : Utiliser une image Node.js pour construire le projet
FROM node:16-alpine as build

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers dans l'image
COPY . .

# Compiler le code TypeScript en JavaScript
RUN npm run build

# Étape 2 : Préparer une image minimale pour exécuter l'application
FROM node:16-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires pour exécuter l'application
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

# Copier le fichier Prisma
COPY --from=build /app/prisma ./prisma

# Exposer le port 3000
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "dist/index.js"]
