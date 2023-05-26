import { ServiceResponse } from './ServiceResponse';
import { Product } from './Product';

export type Order = {
  id: number;
  userId: number;
  productIds?: Product[];
};

type OrderReturn = {
  id: number,
  userId: number,
  productIds: number[] | undefined,
};

export type ListOrderResponse = ServiceResponse<OrderReturn[]>;
