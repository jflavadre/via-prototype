import express, { urlencoded } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

//---- Handlerbars関係
import Handlebars from "handlebars";
import { engine } from "express-handlebars";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";
//---- handlebars herlpersをインポート
import * as hbs_helpers from "../helpers/hbs_helpers.js";

//---- __dirname関係
import { __viewsPath, __publicPath } from "../utils/pathThings.js";

//---- .env関係
import "dotenv/config";

//---- routes関係をインポート
import homeRoutes from "../home/routes/homeRoutes.js";
import userRoutes from "../user/routes/userRoutes.js";
import machineRoutes from "../machine/routes/machineRoutes.js";

//---- アプリを起動する
const app = express();

// ログ表示
app.use(morgan("dev"));

// jsonの使用
app.use(express.json());
app.use(urlencoded({ extended: true }));
//---- クッキーを使用する
app.use(cookieParser());

//---- handlebarsの設定
app.engine(
	".hbs",
	engine({
		extname: ".hbs",
		handlebars: allowInsecurePrototypeAccess(Handlebars),
		helpers: hbs_helpers,
	})
);
app.set("view engine", ".hbs");
app.set("views", __viewsPath);

// src/public 静的ファイルの設定
app.use(express.static(__publicPath));

// Page routes
app.use("/", homeRoutes);
app.use("/user", userRoutes);
app.use("/machine", machineRoutes);

// Test version
app.use("/probandoversion", (req, res) => {
	return res.json({ message: "cambiando el machine register" });
});

export default app;
