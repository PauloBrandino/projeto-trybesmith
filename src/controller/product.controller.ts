import { Request, Response } from 'express';
import productService from '../services/product.services';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const productToCreate = req.body;

  const { data } = await productService.createProduct(productToCreate);

  return res.status(201).json(data);
}

async function listProducts(req: Request, res: Response): Promise<Response> {
  const { data } = await productService.listProducts();

  return res.status(200).json(data);
}

export default {
  createProduct,
  listProducts
};