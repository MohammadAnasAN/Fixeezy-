import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on("connected", () => {
        console.log("MongoDB connected successfully");
    });
    await mongoose.connect(`${process.env.MONGO_URI}/Fixeezy`) 
}

export default connectDB;