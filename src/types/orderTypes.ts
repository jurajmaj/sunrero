export interface Order {
  id: string;
  createdAt: Date;
  state: string;
  orderItems: Array<OrderItem>;
  totalPrice: OrderMenuItemFinalPrice;
}

export interface OrderItem {
  quantity: number;
  orderMenuItem: OrderMenuItem;
  finalPrice: OrderMenuItemFinalPrice;
}

export interface OrderMenuItem {
  id: string;
  translations: {
    en: {
      name: string;
    };
    sk: {
      name: string;
    };
  };
}

export interface OrderMenuItemFinalPrice {
  amount: number;
  currency: string;
}
