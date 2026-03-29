import express from 'express'
import { createUser, getAllUsers, getStatus, getUser, searchUser } from '../controllers/userController.js'

const router = express.Router()

router.get("/status", getStatus)
router.get("/search/:query", searchUser)
router.get("/:id", getUser)
router.get("/", getAllUsers)
router.post("/create", createUser)

export default router