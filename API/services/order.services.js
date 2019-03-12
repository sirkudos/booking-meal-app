/* eslint-disable no-shadow */
import dummyData from '../utils/dummyData';

import Orders from '../models/order.meals';

const orderServices = {
  // Post
  placeorder(order) {
    const orderLength = dummyData.orders.length;
    const lastId = dummyData.orders[orderLength - 1].id;
    const newId = lastId + 1;
    // eslint-disable-next-line no-param-reassign
    order.id = newId;
    dummyData.orders.push(order);
    return dummyData.orders;
  },
  // put
  updateOrder(order, id) {
    const checkOrderId = parseInt(id, Number);
    const newOrderList = dummyData.orders.filter(order => order.id !== checkOrderId);
    const orderIdAvailable = (dummyData.orders.length !== newOrderList.length);
    const editedOrder = {
      id: checkOrderId,
      name: order.name,
      quantity: order.quantity,
      price: order.price,
    };
    if (orderIdAvailable) {
      dummyData.orders = [editedOrder, ...newOrderList];
    }
    return {
      editedOrder,
      orderIdAvailable,
    };
  },
  // get
  getAllOrders() {
    const validOrder = dummyData.orders.map((orders) => {
      const newOrder = new Orders();
      newOrder.id = orders.id;
      newOrder.name = orders.name;
      newOrder.quantity = orders.quantity;
      newOrder.price = orders.price;
      return newOrder;
    });
    return validOrder;
  },
};

export default orderServices;
