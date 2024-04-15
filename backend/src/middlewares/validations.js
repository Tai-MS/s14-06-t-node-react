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
		body('category').notEmpty().withMessage('La categoria es requerida'), */
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
