
import { Router } from 'express'
import { getRoot, getUsers, getUser, makeUser } from '../controllers'

const router = Router()

router.get('/', getRoot)
router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.post('/user', makeUser)

export default router
