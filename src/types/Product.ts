import { ProductSequelizeModel } from 'src/database/models/product.model';
import { ServiceResponse } from './ServiceResponse';

type ProductResponse = {
  id: number;
  name: string;
  price: string;
};

export type Product = {
  id: number;
  name: string;
  price: string;
  orderId: number | null;
};

export type CreateProductInput = Omit<Product, 'id'>;

export type CreateProductResponse = ServiceResponse<ProductResponse>;

export type ListProductResponse = ServiceResponse<ProductSequelizeModel[]>;