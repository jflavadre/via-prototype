export const allLogout = (req, res) => {
	try {
		res.cookie("token", null, { expires: new Date(0) });
		res.redirect("/");
	} catch (error) {
		console.error(error);
		res.redirect("/");
	}
};
