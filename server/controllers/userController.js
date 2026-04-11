import User from '../models/userModel.js'

// Get Status
export const getStatus = async (req, res) => {

    try {

        const total = await User.countDocuments()
        const active = await User.countDocuments({status: "Active"})
        const inactive = await User.countDocuments({ status: "Inactive" })
        
        res.json({ total, active, inactive })

        res.json("Hello World  again")
    } catch (error) {
        res.status(500).json({ message: "Error fetch statistics", error: error.message })
    }
}

// Search User
export const searchUser = async (req, res) => {

    try {
        const query = req.params.query
        const page = parseInt(req.params.page) || 1
        const limit = parseInt(req.query.limit) || 10
        const skip = (page - 1) * limit

        const searchQuery = {
            $or: [
                { name: { $regex: query, $options: "i" } },
                { email: { $regex: query, $options: "i" } },
                { phone: { $regex: query, $options: "i" } },
                { status: { $regex: query, $options: "i" } },
            ],    
        }
        const users = await User
            .find(searchQuery)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
        
        const total = await User.countDocuments(searchQuery)
        
        res.json({
            users,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            totalUsers: total,
        })        
    } catch (error) {
        res.status(500).json({ message: "Error searching user", error: error.message })
    }
}

export const createUser = async (req, res) => {
    try {
       const { name, email, phone, status } = req.body
       
    if(!name || !email || !phone) {
        return res.status(400).json({ message: "Name, Email and Phone are required.!" })
    }
    const existingUser = await User.findOne({ email })
    
    if(existingUser) {
        return res.status(400).json({ message: " Email already exist..!"})
    }
    
    const user = new User({
        name,
        email,
        phone,
        status: status || "Active"
    })
    await user.save()
    res.status(201).json(user)
         
    } catch (error) {
        res.status(500).json({ message: "Error Creating User.", error: error.message })
    }
}

// Get All Users
export const getAllUsers = async (req, res) => {

    try {
        const users = await User.find()
        const page = parseInt(req.params.page) || 1
        const limit = parseInt(req.query.limit) || 10
        const skip = (page - 1) * limit

        // const users = await User           
        //     .sort({ createdAt: -1 })
        //     .skip(skip)
        //     .limit(limit)
        
        const total = await User.countDocuments()

        res.json({
            users,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            totalUsers: total,
        })

    } catch (error) {
        res.status(500).json({ message: "Error Getting the User.", error: error.message })
    }
}

// Get single User By ID
export const getUser = async (req, res) => {

    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).json({ message: "User Not Found.!" })
        }

        res.json(user)
    } catch (error) {
        res.status(500).json({ message: "Error Getting the User.", error: error.message })
    }
}

// Update USer
export const updateUser = async (req, res) => {
    try {
        const {name, email, phone, status} = req.body

        if (email) {
            const exists = await User.find({ email, _id: { $ne: req.params.id } })
            if (exists) {
                return res.status(400).json({ message: "Email already Exist.!" })
            }
        }

        const user = await User.findByIdAndUpdate(
            req.params.id,
            { name, email, phone, status },
            { new: true, runValidators: true }
        )

        if (!user) {
            return
            res.status(404).json({ message: "User not found." })
            res.json(user)
        }

    } catch (error) {
        res
            .status(500)
            .json({ message: "Error Updating the User.", error: error.message })
    }
}