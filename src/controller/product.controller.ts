import productService from '../services/product.services'
import { Request, Response } from "express";

async function createProduct(req: Request, res: Response) {
    const productToCreate = req.body;

    const { data } = await productService.createProduct(productToCreate);

    return res.status(201).json(data);
}

export default {
    createProduct
}