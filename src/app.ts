import express from 'express';
import route from './routes/product.routes';

const app = express();

app.use(express.json());

app.use('/', route);

export default app;
