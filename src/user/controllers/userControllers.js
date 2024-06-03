import { getRegister } from "./register/getRegister.js";
import { postRegister } from "./register/postRegister.js";
import { postLogin } from "./login/postLogin.js";
import { allLogout } from "./login/allLogout.js";
import { getProfile } from "./login/getProfile.js";

export const controller = {
	getRegister,
	postRegister,
	postLogin,
	allLogout,
	getProfile,
};
