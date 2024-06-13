import { Router } from "express";
import { controller } from "../controllers/processControllers.js";
//-----------------トークン認証
import { validateToken } from "../../middlewares/validateToken.js";

const router = Router();

//---- Get 作業工程　on views/process/machine.hbs
router.get("/machine/:id", validateToken, controller.getMachine);
//---- Get 最終まとめ０３ on views/process/regulate03.hbs
router.get("/singular/regulate03/:id", validateToken, controller.getRegulate03);
//--- Put 採取まとめ03 on views/process/putRegulate03.hbs
router.put(
	"/singular/regulate03/:id/update",
	validateToken,
	controller.putRegulate03
);

export default router;
