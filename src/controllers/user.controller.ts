
import {Request, Response} from "express"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const getUser = async (req: Request, res: Response): Promise<void> =>{
    try {
        // const posts: Post[] = await prisma.user.findMany()
        const users = await prisma.user.findMany()
        res.json(users)
    } catch (error) {
        res.status(500).json({error:"Error fetching posts"})
    }
}

const createUser = async (req:Request, res:Response) : Promise<void> => {
    const { name, password, email } = req.body

    if(!name || !password || !email){
        res.status(400).json({error:"Name, password and email are required"})
    }

    try {
        const newUser = await prisma.user.create({
            data:{
                name, password, email
            }
        })
        res.status(201).json(newUser)

    } catch (error) {
        res.status(500).json({error:"Error creating post"})
    }
}

export {
    getUser,
    createUser
}