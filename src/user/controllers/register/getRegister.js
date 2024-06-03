export const getRegister = (req, res) => {
	try {
		//---- Global variable set
		res.locals.user = req.user;
		return res.render("user/register");
	} catch (error) {
		console.log(error);
		res.redirect("/");
	}
};
