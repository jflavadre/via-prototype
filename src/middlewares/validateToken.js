import JWT from "jsonwebtoken";

//-----------------JWTのシークレートパスワード
const jwtSecret = process.env.JWT_SECRET;

export const validateToken = async (req, res, next) => {
	//-----------------クッキーからトークンをリクエスト
	const { token } = req.cookies;
	//-----------------トークンの確認
	if (!token) {
		console.log("No token...");
		return res.render("home", {
			alertMessage:
				"認証を確認できませんでした、もう一度ログインしてください。",
		});
	}
	//-----------------トークンの認証
	await JWT.verify(token, jwtSecret, (err, decoded) => {
		if (err) {
			console.log(err.message);
			return res.render("home", {
				alertMessage:
					"認証の有効期限が切れました、もう一度ログインしてください。",
			});
		}
		//-- req.userにdecodedのデータを保存
		req.user = decoded;
		//-- !important -- この next() を　JWT.verifyの外には置かないこと!
		next();
	});
};
