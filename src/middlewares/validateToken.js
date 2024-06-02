import JWT from "jsonwebtoken";

//-----------------JWTのシークレートパスワード
const jwtSecret = process.env.JWT_SECRET;

export const validateToken = async (req, res, next) => {
	//-----------------クッキーからトークンをリクエスト
	const { token } = req.cookies;
	//-----------------トークンの確認
	if (!token) {
		return res.status(401).json({ message: "No token, authorization denied" });
	}
	//-----------------トークンの認証
	await JWT.verify(token, jwtSecret, (err, decoded) => {
		if (err) {
			console.log(err.message);
			return res.status(401).json({ message: "Token is not valid" });
		}
		//-- req.userにdecodedのデータを保存
		req.user = decoded;
		//-- !important -- この next() を　JWT.verifyの外には置かないこと!
		next();
	});
};
