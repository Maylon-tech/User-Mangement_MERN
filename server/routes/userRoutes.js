import express from 'express'
import { getStatus, searchUser } from '../controllers/userController.js'

const router = express.Router()

router.get("/status", getStatus)
router.get("/search/:query", searchUser)

export default router