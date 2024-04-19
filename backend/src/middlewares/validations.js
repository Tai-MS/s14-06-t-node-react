import { body, validationResult } from 'express-validator';

// Middleware para validar los campos de un servicio
export const validateServices = (req, res, next) => {
	const validations = [
		body('title')
			.isLength({ min: 3, max: 50 })
			.notEmpty()
			.withMessage('El nombre del servicio es requerido'),
		/* 	body('description')
			.isLength({ min: 3, max: 50 })
			.notEmpty()
			.withMessage('La descripcion del servicio es requerida'),
<<<<<<< HEAD
		/* 	body('category').notEmpty().withMessage('La categoria es requerida'), */
=======
		body('category').notEmpty().withMessage('La categoria es requerida'), */
>>>>>>> da31081bdb990d3ffead5b6e84435b453e06cccf
	];

	// Ejecuta las validaciones
	Promise.all(validations.map((validation) => validation.run(req)))
		.then(() => {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}

			next();
		})
		.catch(next);
};
