// controller/auth.js
import { db } from "../db.js";

export const postRegrister = (req, res) => {
    try {
        const { name, email, password } = req.body;

        // if (!name || !email || !password) {
        //   return res.status(400).json({ message: "All fields are required" });
        // }

        const sqlQuery = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        db.query(sqlQuery, [name, email, password], (err, result) => {
            if (err) {
                return res.status(500).json({ message: "DB error", error: err });
            }
            res.status(201).json({ message: "User registered successfully", userId: result.insertId });
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
