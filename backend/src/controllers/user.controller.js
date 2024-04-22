import serviceModel from '../models/service.model.js';
import userModel from '../models/user.model.js';

import bcryptjs from 'bcryptjs';

export const usersGet = async (req, res) => {
	try {
		const users = await userModel.find();

		res.json({
			users,
		});
	} catch (error) {
		console.log(error);
		res.status(404).json({
			msg: 'Error al obtener los usuarios.',
		});
	}
};

export const getAdquiredServices = async (req, res) => {
	try {
		const { id } = req.params;

		const {adquired_services} = await userModel.findById(id).populate('adquired_services');

		res.json({
			adquired_services
		});
	} catch (error) {
		console.log(error);
		res.status(404).json({
			msg: 'Error al obtener los servicios adquiridos por el usuario.',
		});
	}

}

export const getProvidedServices = async (req, res) => {
	try {
		const { id } = req.params;

		const {provided_services} = await userModel.findById(id).populate('provided_services');

		res.json({
			provided_services
		});
	} catch (error) {
		console.log(error);
		res.status(404).json({
			msg: 'Error al obtener los servicios adquiridos por el usuario.',
		});
	}

}



export const userGet = async (req, res) => {
	try {
		const { id } = req.params;

		const user = await userModel.findById(id);

		res.json({
			user,
		});
	} catch (error) {
		console.log(error);
		res.status(404).json({
			msg: 'Usuario Inexistente.',
		});
	}
};

export const userPost = async (req, res) => {
	try {
		const {
			email,
			password,
			firstName,
			lastName,
			rol,
			city,
			service_type,
			type_of_payment,
			phone,
			address,
			category,
		} = req.body;

		const user = new userModel({
			email,
			password,
			firstName,
			lastName,
			rol,
			city,
			service_type,
			type_of_payment,
			phone,
			address,
			category,
		});

		const salt = bcryptjs.genSaltSync();

		user.password = bcryptjs.hashSync(password, salt);

		console.log(user);
		await user.save();

		res.json({
			user,
		});
	} catch (error) {
		console.log(error);
		res.status(404).json({
			msg: 'Error al crear usuario, por favor revise los datos ingresados',
		});
	}
};

export const usersPut = async (req, res) => {
	try {
		const { id } = req.params;
		const { _id, password, email, ...rest } = req.body;

		const userDB = await userModel.findByIdAndUpdate(id, rest, { new: true });

		res.json({
			userDB,
		});
	} catch (error) {
		console.log(error);
		res.status(404).json({
			msg: 'Error al actualizar usuario, por favor revise los datos ingresados',
		});
	}
};

export const usersDelete = async (req, res) => {
	try {
		const { id } = req.params;

		const user = await userModel.findByIdAndDelete(id, { new: true });

		res.json({
			user,
		});
	} catch (error) {
		console.log(error);
		res.status(404).json({
			msg: 'Error al eliminar usuario, por favor revise los datos ingresados',
		});
	}
};

// Función para buscar usuarios por categoría
export const getUsersByCategory = async (req, res) => {
	try {
		const categoryId = req.params.id;

		const users = await userModel
			.find({ category: categoryId })
			.populate('category', 'name');

		res.status(200).json(users);
	} catch (error) {
		console.log('Error al obtener usuarios por categoria: ', error);
		res.status(500).json({ error: 'Error al obtener usuarios por ctegoria' });
	}
};


export const addServiceToUser = async (req, res) => {
	try {
		const { id } = req.params;
		const { service_id } = req.body;

		const user = await userModel.findById(id);
		const adquiredService = await serviceModel.findById(service_id)

		if (!user) {
			return res.status(404).json({
				msg: 'Usuario no encontrado',
			});
		}
		if(user.rol !== 'CLIENT'){
			return res.status(400).json({
				msg: 'El usuario no es un cliente',
			});
		}
		if(!adquiredService){
			return res.status(404).json({
				msg: 'Servicio no encontrado',
			});
		}

		user.adquired_services.push(adquiredService._id);

		await user.save();

		res.status(200).json({
			msg: 'Servicio agregado correctamente',
		})
	} catch (error) {
		console.log(error);
		throw new Error('Error al agregar servicio al usuario');
	}
}