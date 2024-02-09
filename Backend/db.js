import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to MONGODB");
  } catch (err) {
    throw err;
  }
};

export default connectDB;