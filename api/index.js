import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/userRoute.js'
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => {
    console.log(err);
  });
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Server is Running on Port ${port}`);
});
app.use("/api/user", userRoutes)