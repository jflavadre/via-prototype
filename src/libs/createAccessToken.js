import JWT from "jsonwebtoken";

//-----------------JWTのシークレートパスワード
const jwtSecret = process.env.JWT_SECRET;

export const createAccessToken = (payload) => {
	return new Promise((resolve, reject) => {
		//-----------------tokenを生成 (60秒)
		JWT.sign(payload, jwtSecret, { expiresIn: "60m" }, (err, token) => {
			if (err) {
				reject(err);
				console.log(err.message);
			}
			resolve(token);
		});
	});
};
