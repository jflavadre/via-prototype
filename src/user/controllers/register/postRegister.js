import User from "../../models/userModels.js";
import brcrypt from "bcryptjs";
import { createAccessToken } from "../../../libs/createAccessToken.js";

export const postRegister = async (req, res) => {
	const { email, password, userCompanyID, firstName, lastName, level } =
		req.body;

	try {
		//Password　をハッシュ化
		const hashPassword = await brcrypt.hash(password, 10);
		//New User　を作成
		const newUser = new User({
			email,
			password: hashPassword,
			userCompanyID,
			firstName,
			lastName,
			level,
		});
		//User　をデータベースに保存
		const userSaved = await newUser.save();

		let level3;
		if (userSaved.level === 3) {
			level3 = true;
		}
		//tokenを生成
		const token = await createAccessToken({
			id: userSaved._id,
			firstName: userSaved.firstName,
			level3,
		});

		//クッキーにトークンを保存
		res.cookie("token", token);
		res.render("user/registered", {
			firstName,
			lastName,
			email,
			userCompanyID,
			level,
		});
	} catch (error) {
		console.log("------------UserをDB登録のエラーが発生しています------------");
		res.status(500).json({ message: error.message });
	}
};
