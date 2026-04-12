import express from 'express'
import { createUser, deleteUser, getAllUsers, getStatus, getUser, searchUser, updateUser } from '../controllers/userController.js'

const router = express.Router()

router.get("/status", getStatus)
router.get("/search/:query", searchUser)

router.get("/:id", getUser)
router.get("/", getAllUsers)

router.post("/create", createUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

export default router