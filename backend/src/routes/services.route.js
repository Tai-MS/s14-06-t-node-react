import Router from 'express';
import {
	getAllServices,
	createService,
	getServiceById,
	updateService,
	deleteService,
} from '../controllers/services.controllers.js';
import { validateServices } from '../middlewares/validations.js';
const router = Router();

router.get('/', getAllServices);
router.post('/', validateServices, createService);
router.get('/:id', getServiceById);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

export default router;
