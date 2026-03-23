import express from 'express'
import cors from 'cors'
const app = express()

import userRoutes from './routes/userRoutes.js'

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use("/api/user", userRoutes)

export default app