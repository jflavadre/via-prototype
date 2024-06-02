import app from "./server/app.js";
import { connectDB } from "./database/database.js";
//---- Port Binding
const port = process.env.PORT || 4000;

//MongoDB Atlasに接続
connectDB();

app.listen(port, () => {
	console.log("サーバを起動しました: ", port);
});
