import { ServiceResponse } from "./ServiceResponse";

export type Product = {
  id: number;
  name: string;
  price: string;
  orderId: number;
};

export type CreateProductInput = Omit<Product, 'id'>;

export type CreateProductResponse = ServiceResponse<{
  id: number;
  name: string;
  price: string;
}>