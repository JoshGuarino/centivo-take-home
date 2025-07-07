
import { Router } from 'express'
import { getRoot, getUsers, getUser, makeUser } from '../controllers'

const router = Router()

router.get('/', getRoot)
router.get('/users', getUsers)
router.get('/users/:id', getUser)
router.post('/users', makeUser)

export default router
