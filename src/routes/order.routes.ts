import express from 'express';
import orderController from '../controller/order.controller';

const routeOrder = express.Router();

routeOrder.get('/', orderController.listOrders);

export default routeOrder;