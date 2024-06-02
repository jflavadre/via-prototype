import User from "../../models/userModels.js";
import brcrypt from "bcryptjs";
import { createAccessToken } from "../../../libs/createAccessToken.js";

export const postLogin = async (req, res) => {
	try {
		//-----------------入力項目
		const { userCompanyID, password } = req.body;
		//-----------------USERをデータベースで検索
		const userFound = await User.findOne({ userCompanyID });
		//-----------------入力項目が一致しない場合
		if (!userFound) {
			console.error(new Error("-------------------社員IDが一致しない"));
			return res.redirect("/?ユーザーが見つかりませんでした");
		}
		//-----------------パスワードの認証
		const passwordMatch = await brcrypt.compare(password, userFound.password);
		if (!passwordMatch) {
			console.error(
				new Error("-------------------ログインパスワードかIDが一致しない")
			);
			return res.redirect("/?ログイン認証ができませんでした");
		}
		//-----------------TOKENを生成
		const token = await createAccessToken({ id: userFound._id });

		res.cookie("token", token);
		return res.redirect("/user/profile");
	} catch (error) {
		console.error(error);
		res.redirect("/");
	}
};
