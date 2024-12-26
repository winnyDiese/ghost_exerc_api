import express, {Request, Response} from 'express'
import { PrismaClient } from '@prisma/client'
import router_user from "./routers/user.router"

const app = express()
const prisma = new PrismaClient()

const corsOptions = {
    origin: 'http://localhost:3000', 
    optionsSuccessStatus: 200, // Réglage pour d'anciens navigateurs
    credentials: true 
};


app.use(express.json())
app.use(core(corsOptions))
app.use('/api', router_user)


// Demarer le serveur
app.listen(3001, ()=>{
    console.log('Server is running on http://localhost:3001')
})
