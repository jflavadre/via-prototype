import { Router } from "express";

//-----------------トークン認証
import { validateToken } from "../../middlewares/validateToken.js";

import { machineSearch } from "../controllers/machineSearch.js";

const router = Router();

router.get("/search", validateToken, machineSearch);

export default router;
