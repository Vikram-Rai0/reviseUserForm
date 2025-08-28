import express from "express";
export const userRouter = express.Router();
import { postRegrister } from "../controller/auth.js";

userRouter.post("/userpost", postRegrister);
