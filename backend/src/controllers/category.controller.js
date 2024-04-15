import categoryModel from '../models/category.model.js';

// obtener todas las categorias
export const getAllCategory = async (req, res) => {
	try {
		const category = await categoryModel.find();
		res.json(category);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// crear un nueva categoria
export const createCategory = async (req, res) => {
	const category = new categoryModel({
		name: req.body.name,
		img: req.body.img,
		service: req.body.service,
	});

	try {
		const savedCategory = await category.save();
		res.status(201).json(savedCategory);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// eliminar una categoria
export const deleteCategory = async (req, res) => {
	try {
		const deletedCategory = await categoryModel.findByIdAndDelete(req.params.id);
		if (!deletedCategory) {
			return res.status(404).json({ message: 'Categoria no encontrada' });
		}
		res.json({ message: 'Categoria eliminada' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
