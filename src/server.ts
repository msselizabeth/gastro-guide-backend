import mongoose from "mongoose";
import { app } from "./index.js";

const { DB_HOST, PORT } = process.env;

if (!DB_HOST) {
    console.error("❌ DB_HOST is missing!");
    process.exit(1);
  }

const connectDB = async () => {
    try {
      await mongoose.connect(DB_HOST as string);
      console.log('✅ MongoDB connected');
    } catch (error) {
      console.error('❌ Database connection error:', error);
      process.exit(1);
    }
};
  
app.listen(PORT, async () => {
    await connectDB();
    console.log(`🚀 Server running on port ${PORT}`);
  });

