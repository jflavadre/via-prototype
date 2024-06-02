import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

// __dirnameでsrcフォルダーまでのPATHを作成
const __dirname = path.dirname(__filename).slice(0, -5);

// __viewsPathで src/views までのPATHを作成
export const __viewsPath = path.resolve(__dirname + "/views");

// __publicPathで src/views までのPATHを作成
export const __publicPath = path.resolve(__dirname + "/public");
