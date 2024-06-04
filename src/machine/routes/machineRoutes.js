import { Router } from "express";
import { controller } from "../controllers/machineControllers.js";
//-----------------トークン認証
import { validateToken } from "../../middlewares/validateToken.js";

const router = Router();

router.get("/search", validateToken, controller.getSearch);
router.get("/register", validateToken, controller.getRegister);
router.post("/register", validateToken, controller.postRegister);

router.get("/unique/process/all/:id", validateToken, controller.getUnique);

router.get("/unique/process/regulate03/:id", validateToken, controller.getRegulate03);

export default router;
