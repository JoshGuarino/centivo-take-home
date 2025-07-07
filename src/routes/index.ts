
import { Router } from 'express'
import { getRoot, getUser, makeUser } from '../controllers'

const router = Router()

router.get('/', getRoot)
router.get('/user/:id', getUser)
router.post('/user', makeUser)

export default router
