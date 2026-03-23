import mongoose from 'mongoose'

const connectDB = async () => {
    mongoose
        .connect(process.env.MONGO_URI.replace(
            "<DB_PASSWORD>",
            process.env.DATABASE_PASSWORD
        ))
        .then(() => console.log("MongoDB Connected...."))
        .catch ((error) => {
            console.log("MongoDB Connection Error", error)
        })
}

export default connectDB