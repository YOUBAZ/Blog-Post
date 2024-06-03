import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authRoute.js";
import cookieParser from "cookie-parser";

const port = 3000;
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());
app.use(cookieParser());
app.listen(port, () => {
  console.log(`Server is Running on Port ${port}`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
