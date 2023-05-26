import express from 'express';
import productController from '../controller/product.controller';
import validateProductBody from '../middlewares/validateProductBody';

const route = express.Router();

route.post('/', validateProductBody, productController.createProduct);
route.get('/', productController.listProducts);

export default route;
