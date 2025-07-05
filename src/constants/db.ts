import mongoose from "mongoose"

export const connectDb = async (connectionString: string) => {
    try {
        await mongoose.connect(connectionString)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(`Error Connecting MongoDB, ${(error as Error).message}`)
    }
}