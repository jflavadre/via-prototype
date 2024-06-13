import Machine from "../../machine/models/machineModels.js";

export const getMachine = async (req, res) => {
	try {
		//---- Global "user"
		res.locals.user = req.user;
		//---- Find machine by params
		const machineFounded = await Machine.findById(req.params.id);
		//---- Global "machine"
		res.locals.machine = machineFounded;

		res.render("process/machine", {
			updateMessage: req.query.updateMessage,
			message: "作業データを更新しました！",
		});
	} catch (error) {
		return console.log(error.message);
	}
};
