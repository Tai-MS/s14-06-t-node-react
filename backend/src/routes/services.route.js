import Router from 'express';
import {
	getAllServices,
	createService,
	getServiceById,
	updateService,
	deleteService,
} from '../controllers/services.controllers.js';
import { validateServices } from '../middlewares/validations.js';
import { check } from 'express-validator';
import { validateFields } from '../middlewares/validate-fields.js';
import { validateJWT } from '../middlewares/validate-JWT.js';
import { existUserID } from '../helpers/db-validators.js';
const router = Router();

router.get('/', getAllServices);
// router.post('/', validateServices, createService);
router.post('/:id', [
	validateJWT,
	check('id', 'No es un ID válido').isMongoId(),
	check('id').custom(existUserID),
	check('title').not().isEmpty(),
	check('description').not().isEmpty(),
	check('category').not().isEmpty(),
	validateFields
], createService);
router.get('/:id', getServiceById);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

export default router;
