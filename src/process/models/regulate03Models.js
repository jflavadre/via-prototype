import mongoose, { Schema } from "mongoose";

const regulate03Schema = new mongoose.Schema(
	{
		machine_id: { type: Schema.Types.ObjectId },
		machineInfo: {
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
		},
		stamp: {
			primaryBoss: {
				type: String,
				default: null,
			},
			secondaryBoss: {
				type: String,
				default: null,
			},
			smallBoss: {
				type: String,
				default: null,
			},
		},
		process01: [],
		process02: [],
		process03: [],
		process04: [],
		process05: [],
		process06: [],
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default mongoose.model("Regulate03", regulate03Schema);
