import { Router } from "express";
import { controller } from "../controllers/userControllers.js";

//-----------------トークン認証
import { validateToken } from "../../middlewares/validateToken.js";

const router = Router();

router.get("/register", validateToken, controller.getRegister);

router.post("/register", validateToken, controller.postRegister);

router.post("/login", controller.postLogin);

router.all("/logout", controller.allLogout);

router.get("/profile", validateToken, controller.getProfile);

export default router;
