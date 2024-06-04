import Machine from "../../models/machineModels.js";

export const getRegulate03 = async (req, res) => {
	try {
		 //---- Global "user"
         res.locals.user = req.user;
         //---- Find unique machine by params
         const machineFounded = await Machine.findById(req.params.id);
         //---- Global "machine"
         res.locals.machine = machineFounded;
         
		res.render("machine/process/regulate03");
	} catch (error) {
		return console.log(error.message);
	}
};
