import Machine from "../../models/machineModels.js";

export const getSearch = async (req, res) => {
	try {
		//---- Global "user"
		res.locals.user = req.user;
		//---- Find all machines
		const machineFounded = await Machine.find();
		//---- if not found
		if (!machineFounded) {
			return res.status(400).json({ message: "機械が見つかりませんでした" });
		}
		//---- Global "machine"
		res.locals.machine = machineFounded;

		res.render("machine/search");
	} catch (error) {
		console.log(error.message);
		res.redirect("/?error=Machineエラー");
	}
};
