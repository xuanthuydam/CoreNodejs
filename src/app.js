import express from "express";
import connectDB from "./config/database.js";
import { config } from "dotenv";
import bodyParser from "body-parser";
import productRoutes from "./routes/productRoutes.js";

const { json, urlencoded } = bodyParser;

config(); // Đọc các biến môi trường từ file .env

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

// Kết nối MongoDB
connectDB();

// Sử dụng các routes
app.use("/api/products", productRoutes);

export default app;
