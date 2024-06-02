import { getRegister } from "./register/getRegister.js";
import { postRegister } from "./register/postRegister.js";
import { postLogin } from "./login/postLogin.js";
import { postLogout } from "./login/postLogout.js";
import { getProfile } from "./login/getProfile.js";

export const controller = {
	getRegister,
	postRegister,
	postLogin,
	postLogout,
	getProfile,
};
