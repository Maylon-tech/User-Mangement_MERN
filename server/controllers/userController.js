import User from '../models/userModel.js'

// Get Status
export const getStatus = async (req, res) => {

    try {

        const total = await User.find()

        res.json("Hello World  again")
    } catch (error) {
        res.status(500).json({ message: "Error fetch statistics", error: error.message })
    }
}