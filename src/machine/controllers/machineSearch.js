import User from "../../user/models/userModels.js";

export const machineSearch = async (req, res) => {
	try {
		const userFound = await User.findById(req.user.id);
		if (!userFound) {
			return res
				.status(400)
				.json({ message: "ユーザーが見つかりませんでした" });
		}
		res.locals.user = userFound;
		res.render("machine/search");
	} catch (error) {
		console.log(error.message);
		res.redirect("/?error=Machineエラー");
	}
};
