// OrderCard.tsx
import React from "react";
import { Order } from "../../types/orderTypes";
import styles from './OrderCard.module.css';

interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Order ID: {order.id}</h2>
      <p>Created At: {new Date(order.createdAt).toLocaleString()}</p>
      <p>State: {order.state}</p>
      {order.orderItems.map((item, index) => (
        <div key={index} className={styles.item}>
          <p>Item {index + 1}:</p>
          <p>Name (English): {item.orderMenuItem.translations.en.name}</p>
          {/* <p>Name (Slovak): {item.orderMenuItem.translations.sk.name}</p> */}
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.finalPrice.amount} {item.finalPrice.currency}</p>
        </div>
      ))}
      <p>Total Price: {order.totalPrice.amount} {order.totalPrice.currency}</p>
    </div>
  );
};

export default OrderCard;