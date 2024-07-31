import { Router } from "express";
import { createUser } from "../../controllers/user_management/userControler.js";

const router = Router();

router.post("/create-user/", createUser);

export default router;
