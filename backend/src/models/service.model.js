import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const serviceModel = mongoose.model('Service', serviceSchema);
export default serviceModel;
