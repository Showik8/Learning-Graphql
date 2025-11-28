import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL || "");
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);
  }
};
export const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  } catch (err) {
    console.error(err);
  }
};
