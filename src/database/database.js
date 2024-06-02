import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://johnfernando10:${process.env.MONGO_DB_PASSWORD}@cluster0.7wh6tdt.mongodb.net/via-prototype`
		);
		console.log("Mongo DB Atlasに接続しました!");
	} catch (error) {
		console.error(error);
	}
};
