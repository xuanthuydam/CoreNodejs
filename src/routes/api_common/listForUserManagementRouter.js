import { Router } from "express";
import {
  getAllLanguage,
  getAllRole,
  getAllTheme,
  getAllTimezone,
} from "../../controllers/api_common/getListForUserMangageController.js";

const router = Router();

router.get("/get-all-role/", getAllRole);
router.get("/get-all-language/", getAllLanguage);
router.get("/get-all-theme/", getAllTheme);
router.get("/get-all-timezone/", getAllTimezone);

export default router;
