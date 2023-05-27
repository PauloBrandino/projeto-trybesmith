import { ListOrderResponse } from 'src/types/Order';
import ProductModel from '../database/models/product.model';
import OrderModel from '../database/models/order.model';

async function listOrders(): Promise<ListOrderResponse> {
  const list = await OrderModel.findAll({
    include: [{
      model: ProductModel, as: 'productIds', attributes: { exclude: ['name', 'price', 'orderId'] },
    }],
  });
  const listWithProductIds = list.map((order) => {
    const arrayProductsId = order.dataValues.productIds?.map((product) => product.id);
    const newList = {
      ...order.dataValues,
      productIds: arrayProductsId,
    };
    return newList;
  }); 

  return { type: 'OK', data: listWithProductIds };
}

export default {
  listOrders,
};