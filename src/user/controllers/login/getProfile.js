import User from "../../models/userModels.js";

export const getProfile = async (req, res) => {
	try {
		const userFound = await User.findById(req.user.id);
		if (!userFound) {
			return res
				.status(400)
				.json({ message: "ユーザーが見つかりませんでした" });
		}
		//---- グローバル変数"user"を作成する
		res.locals.userFound = userFound;
		res.locals.user = req.user;
		res.render("user/profile");
	} catch (error) {
		console.log(error.message);
		return res.status(400).json({ message: "profile routes problems" });
	}
};
