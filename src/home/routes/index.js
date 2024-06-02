import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
	res.render("home", { errorMessage: req.params.error });
});

export default router;
