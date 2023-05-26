import express from 'express';
import routeProduct from './routes/product.routes';
import routeOrder from './routes/order.routes';
import routeLogin from './routes/login.route';

const app = express();

app.use(express.json());

app.use('/products', routeProduct);
app.use('/orders', routeOrder);
app.use('/login', routeLogin);

export default app;
