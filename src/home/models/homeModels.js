import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		userCompanyID: {
			type: Number,
			unique: true,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		level: {
			type: Number,
			default: 1,
			required: true,
			trim: true,
		},
		firstName: {
			type: String,
			trim: true,
		},
		lastName: {
			type: String,
			trim: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default mongoose.model("User", userSchema);
