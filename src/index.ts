import express, {Request, Response} from 'express'
import { PrismaClient } from '@prisma/client'
import cors from "@types/cors"
import router_user from "./routers/user.router"

const app = express()
const prisma = new PrismaClient()

// Configuration de CORS
const corsOptions: cors.CorsOptions = {
    origin: "http://localhost:3000", // Remplacez par le domaine autorisé
    methods: ["GET", "POST", "PUT", "DELETE"], // Méthodes autorisées
    allowedHeaders: ["Content-Type", "Authorization"], // En-têtes autorisés
  };

// const corsOptions = {
//     origin: 'http://localhost:3000', 
//     optionsSuccessStatus: 200, // Réglage pour d'anciens navigateurs
//     credentials: true 
// };


app.use(express.json())
app.use(cors(corsOptions))
app.use('/api', router_user)


// Demarer le serveur
app.listen(3001, ()=>{
    console.log('Server is running on http://localhost:3001')
})
