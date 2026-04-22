import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // ✅ Use stable connection check
    if (mongoose.connection.readyState >= 1) return;

    await mongoose.connect(process.env.MONGODB_URI!);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB Connection Error:", error);
    throw error; // important for debugging
  }
};