import express, {Router, Request, Response} from 'express'
import { getUser, createUser } from '../controllers/user.controller'

const router: Router = express.Router()

router.get('/users', getUser)
router.post('/users', createUser)

export default router