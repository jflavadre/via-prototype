import Regulate03 from "../models/regulate03Models.js";

export const getRegulate03 = async (req, res) => {
	try {
		//---- Global "user"
		res.locals.user = req.user;
		console.log(req.params.id);
		//---- Find process by params
		const processFounded = await Regulate03.findById(req.params.id);
		//---- Global "process"
		res.locals.process = processFounded;

		res.render("process/regulate03");
	} catch (error) {
		return console.log(error.message);
	}
};
