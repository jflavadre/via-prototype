import mongoose, { Schema, isObjectIdOrHexString } from "mongoose";

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
			regulate02_id: { type: Schema.Types.ObjectId, default: null },
			galvano_id: { type: Schema.Types.ObjectId, default: null },
			regulate03_id: { type: Schema.Types.ObjectId, default: null },
			regulate04_id: { type: Schema.Types.ObjectId, default: null },
			bunkai_id: { type: Schema.Types.ObjectId, default: null },
		},
		progress: {
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
