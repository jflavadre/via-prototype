import app from "./server/app.js";
import { connectDB } from "./database/database.js";

//MongoDB Atlasに接続
connectDB();

app.listen(3000);
console.log("サーバを起動しました: ", 3000);
