import express, { urlencoded } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
//---- Handlerbars関係
import Handlebars from "handlebars";
import { engine } from "express-handlebars";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";
//---- __dirname関係
import { __viewsPath, __publicPath } from "../utils/pathThings.js";
//---- .env関係
import "dotenv/config";

// routes関係をインポート
import homeRoutes from "../home/routes/index.js";
import userRoutes from "../user/routes/index.js";
import machineRoutes from "../machine/routes/index.js";

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

// Global Variables
app.use((req, res, next) => {
    console.log("-- Global Variables --")
	next();
});

export default app;
