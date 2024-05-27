import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoute.js";
import authRoutes from './routes/authRoute.js'
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => {
    console.log(err);
  });
const app = express();
const port = 3000;
app.use(express.json());
app.use("/api/user", userRoutes);
app.use('/api/auth', authRoutes);
app.listen(port, () => {
  console.log(`Server is Running on Port ${port}`);
});
