// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./router/userRoute.js";

const app = express();
dotenv.config();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running");
});
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/api/user", userRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
