import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		category: {
			type: String,
			/* type: mongoose.Schema.Types.ObjectId,
			ref: 'Category', */
		},
	},
	{ timestamps: true }
);

const serviceModel = mongoose.model('Service', serviceSchema);
export default serviceModel;
