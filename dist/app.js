"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const user_router_1 = __importDefault(require("./routers/user.router"));
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
// Configuration de CORS
const corsOptions = {
    origin: "http://localhost:3000", // Remplacez par le domaine autorisé
    methods: ["GET", "POST", "PUT", "DELETE"], // Méthodes autorisées
    allowedHeaders: ["Content-Type", "Authorization"], // En-têtes autorisés
};
// const corsOptions = {
//     origin: 'http://localhost:3000', 
//     optionsSuccessStatus: 200, // Réglage pour d'anciens navigateurs
//     credentials: true 
// };
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use('/api', user_router_1.default);
// Demarer le serveur
app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
