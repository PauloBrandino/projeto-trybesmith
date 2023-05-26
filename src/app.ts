import express from 'express';
import routeProduct from './routes/product.routes';
import routeOrder from './routes/order.routes';

const app = express();

app.use(express.json());

app.use('/products', routeProduct);
app.use('/orders', routeOrder);

export default app;
