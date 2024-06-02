export const postLogout = (req, res) => {
	try {
		res.cookie("token", null, { expires: new Date(0) });
		console.log("ログアウトしました!");
		res.redirect("/");
	} catch (error) {
		console.error(error);
		res.redirect("/");
	}
};
