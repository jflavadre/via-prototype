import Machine from "../../models/machineModels.js";

export const getUnique = async (req, res) => {
	try {
        //---- Global "user"
		res.locals.user = req.user;
        //---- Find unique machine by params
		const machineFounded = await Machine.findById(req.params.id);
        //---- Global "machine"
		res.locals.machine = machineFounded;

		res.render("machine/unique");
	} catch (error) {
		return console.log(error.message);
	}
};
