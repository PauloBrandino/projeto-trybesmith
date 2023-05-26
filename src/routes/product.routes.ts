import express from 'express';
import productController from '../controller/product.controller';
import validateProductBody from '../middlewares/validateProductBody';

const route = express.Router();

route.post('/products', validateProductBody, productController.createProduct);

export default route;
