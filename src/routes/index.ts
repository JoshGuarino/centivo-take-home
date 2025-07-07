
import { Router } from 'express'
import { getRoot, getUser } from '../controllers'

const router = Router()

router.get('/', getRoot)
router.get('/user/:id', getUser)

export default router
