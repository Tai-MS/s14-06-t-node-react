import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		img: {
			type: String,
		},
		service: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Service',
		},
	},

	{ timestamps: {} }
);

const categoryModel = mongoose.model('Category', categorySchema);
export default categoryModel;
