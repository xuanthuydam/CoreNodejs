import { Router } from "express";
import { createRole } from "../../controllers/user_management/roleControler.js";

const router = Router();

router.post("/create-role/", createRole);

export default router;
