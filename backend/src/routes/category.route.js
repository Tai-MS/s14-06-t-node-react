import Router from 'express';
import {
	getAllCategory,
	createCategory,
	deleteCategory,
	getCategoryById,
} from '../controllers/category.controller.js';

const router = Router();

router.get('/', getAllCategory);
router.post('/', createCategory);
router.delete('/:id', deleteCategory);
router.get('/:id', getCategoryById);

export default router;
