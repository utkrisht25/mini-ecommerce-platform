import express from 'express';
import { createProduct, getProducts } from '../controllers/productsController.js';

const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);

export default router;