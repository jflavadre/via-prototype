import { Router } from "express";
import { controller } from "../controllers/machineControllers.js";
//-----------------トークン認証
import { validateToken } from "../../middlewares/validateToken.js";

const router = Router();

router.get("/search", validateToken, controller.getSearch);
router.get("/register", validateToken, controller.getRegister);
router.post("/register", validateToken, controller.postRegister);

export default router;
