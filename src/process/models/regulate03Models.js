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
		process01: [
			{ type: String },
			{ type: String },
			{ type: Boolean, default: false },
		],
		process02: {
			who: { type: String },
			when: { type: String },
			finished: { type: Boolean, default: false },
		},
		process03: {
			who: { type: String },
			when: { type: String },
			finished: { type: Boolean, default: false },
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default mongoose.model("Regulate03", regulate03Schema);
