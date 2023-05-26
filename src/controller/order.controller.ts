import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function listOrders(_req: Request, res: Response): Promise<Response> {
  const { data } = await orderService.listOrders();

  return res.status(200).json(data);
}
export default {
  listOrders,
};