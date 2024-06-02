export const getRegister = (req, res) => {
	try {
		res.render("user/register");
	} catch (error) {
		console.log(error);
		res.redirect("/");
	}
};
