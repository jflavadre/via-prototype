import { Router } from "express";
import { controller } from "../controllers/index.js";

//-----------------トークン認証
import { validateToken } from "../../middlewares/validateToken.js";

const router = Router();

router.get("/register", controller.getRegister);

router.post("/register", controller.postRegister);

router.post("/login", controller.postLogin);

router.all("/logout", controller.postLogout);

router.get("/profile", validateToken, controller.getProfile);

export default router;
