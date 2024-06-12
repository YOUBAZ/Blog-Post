import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createComment } from "../controllers/commentController.js";

const router = express.Router();
router.post("/create", verifyToken, createComment);
export default router