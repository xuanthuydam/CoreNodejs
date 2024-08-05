import express from "express";
import connectDB from "./config/database.js";
import { config } from "dotenv";
import bodyParser from "body-parser";
import roleRouter from "./routes/user_management/roleRouter.js";
import userRouter from "./routes/user_management/userRouter.js";
import authRouter from "./routes/auth/authRouter.js";
import userManagement from "./routes/api_common/listForUserManagementRouter.js";
import { authenticateJWT } from "./middleware/jwt/authMiddleware.js";
import handleValidationErrors from "./middleware/validator/validationMiddleware.js";

const { json, urlencoded } = bodyParser;

config(); // Đọc các biến môi trường từ file .env

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

// Kết nối MongoDB
connectDB();

app.use("/api/role", roleRouter);
// app.use("/api/user", authenticateJWT, handleValidationErrors, userRouter);
app.use("/api/user", authenticateJWT, handleValidationErrors, userRouter);
app.use("/api/user-management", authenticateJWT, userManagement);
app.use("/api/auth", authRouter);

export default app;
