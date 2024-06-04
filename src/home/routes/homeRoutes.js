import { Router } from "express";
import { getHome } from "../controllers/getHome.js";

const router = Router();

router.get("/", getHome);

export default router;
