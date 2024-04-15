import Router from 'express';
import {
	getAllCategory,
	createCategory,
	deleteCategory,
} from '../controllers/category.controller.js';

const router = Router();

router.get('/', getAllCategory);
router.post('/', createCategory);
router.delete('/:id', deleteCategory);

export default router;
