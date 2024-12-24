import express, {Request, Response} from 'express'
import { PrismaClient } from '@prisma/client'
import router_user from "./routers/user.router"

const app = express()
const prisma = new PrismaClient()

app.use(express.json())


app.use('/api', router_user)


// Demarer le serveur
app.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000')
})
