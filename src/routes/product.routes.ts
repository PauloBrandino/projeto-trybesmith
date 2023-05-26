import express from 'express';
import productController from '../controller/product.controller';
import validateProductBody from '../middlewares/validateProductBody';

const routeProduct = express.Router();

routeProduct.post('/', validateProductBody, productController.createProduct);
routeProduct.get('/', productController.listProducts);

export default routeProduct;
