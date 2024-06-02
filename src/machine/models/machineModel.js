import mongoose from "mongoose";

const machineSchema = new mongoose.Schema(
	{
		machineID: {
			type: String,
			unique: true,
			required: true,
			trim: true,
		},
		lotID: {
			type: String,
			required: true,
			trim: true,
		},
		machineType: {
			type: String,
			required: true,
			trim: true,
		},
		customer: {
			type: String,
			required: true,
			trim: true,
		},
		process: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default mongoose.model("Machine", machineSchema);
