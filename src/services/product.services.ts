import { CreateProductInput, CreateProductResponse } from 'src/types/Product';
import ProductModel from '../database/models/product.model';

async function createProduct(product: CreateProductInput): Promise<CreateProductResponse> {
  const { dataValues: { id, name, price } } = await ProductModel.create(product);

  return {
    type: 'CREATED',
    data: {
      id,
      name,
      price,
    },
  };
}

export default {
  createProduct,
};