import { Router } from "express";
import { controller } from "../controllers/machineController.js";
//-----------------トークン認証
import { validateToken } from "../../middlewares/validateToken.js";

const router = Router();

router.get("/search", validateToken, controller.getSearch);
router.get("/register", validateToken, controller.getRegister);
router.post("/register", controller.postRegister);

export default router;
