export const getRegister = (req, res) => {
	try {
		//---- Global "user"
		res.locals.user = req.user;
		
		res.render("machine/register");
	} catch (error) {
		console.log(error);
		res.redirect("/");
	}
};
