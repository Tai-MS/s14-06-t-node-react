import serviceModel from '../models/service.model.js';

//obtener todos los servicios
export const getAllServices = async (req, res) => {
	try {
		const services = await serviceModel.find();
		res.json(services);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Crear un nuevo servicio
export const createService = async (req, res) => {
	const { title, description, image } = req.body;
	const service = new serviceModel({
		title: req.body.title,
		description: req.body.description,
		category: req.body.category,
	});

	try {
		const existingService = await serviceModel.findOne({ title });

		if (existingService) {
			return res
				.status(400)
				.json({ message: 'Ya existe un servicio con este título.' });
		}

		// Si no existe, crear el nuevo servicio
		const service = new serviceModel({
			title,
			description,
			image,
		});

		const savedService = await service.save();
		res.status(201).json(savedService);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//  obtener un servicio por ID
export const getServiceById = async (req, res) => {
	try {
		const service = await serviceModel.findById(req.params.id);
		if (!service) {
			return res.status(404).json({ message: 'Servicio no encontrado' });
		}
		res.json(service);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// actualizar un servicio por ID
export const updateService = async (req, res) => {
	try {
		const updatedService = await serviceModel.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!updatedService) {
			return res.status(404).json({ message: 'Servicio no encontrado' });
		}
		res.json(updatedService);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// eliminar un servicio por ID
export const deleteService = async (req, res) => {
	try {
		const deletedService = await serviceModel.findByIdAndDelete(req.params.id);
		if (!deletedService) {
			return res.status(404).json({ message: 'Servicio no encontrado' });
		}
		res.json({ message: 'Servicio eliminado' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
