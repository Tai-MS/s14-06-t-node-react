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
		image: {
			type: String,
<<<<<<< HEAD
=======
			/* type: mongoose.Schema.Types.ObjectId,
			ref: 'Category', */
>>>>>>> da31081bdb990d3ffead5b6e84435b453e06cccf
		},
	},
	{ timestamps: true }
);

const serviceModel = mongoose.model('Service', serviceSchema);
export default serviceModel;
