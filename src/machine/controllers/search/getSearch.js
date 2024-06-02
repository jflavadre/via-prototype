import Machine from "../../models/machineModel.js";

export const getSearch = async (req, res) => {
	try {
		res.locals.user = req.user;
		console.log(res.locals.user);
		console.log(req.user);
		const machineFounded = await Machine.find();
		if (!machineFounded) {
			return res.status(400).json({ message: "機械が見つかりませんでした" });
		}
		res.locals.machine = machineFounded;
		res.render("machine/search");
	} catch (error) {
		console.log(error.message);
		res.redirect("/?error=Machineエラー");
	}
};
