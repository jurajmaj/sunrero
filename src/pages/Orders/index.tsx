import React, { useState, useEffect } from "react";
import { fetchData } from "../../_api/fetchData";
import styles from "./Orders.module.css";
import OrderCard from "../../components/OrderCard";
import { Order } from '../../types/orderTypes';

const OrdersPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"pending" | "completed">(
    "pending"
  );
  const [data, setData] = useState<Order[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
        // console.log(result);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    getData();
  }, []);

  // filtering orders based on state
  let pendingStates = ['new', 'waiting_for_confirmation', 'confirmed'];
  let pendingOrders;
  if (data) {
    pendingOrders = data.filter((order: Order) => pendingStates.includes(order.state));
    // console.log(pendingOrders);
  }

  let completedStates = ['completed', 'canceled_by_customer', 'rejected', 'expired', 'failed'];
  let completedOrders;
  if (data){
    completedOrders = data.filter((order: Order) => completedStates.includes(order.state));
    // console.log(completedOrders);
  }

  return (
    <div className={styles.orders}>
      <div className={styles.buttons}>
        <button
          className={
            selectedTab === "pending" ? styles.selected : styles.unselected
          }
          onClick={() => setSelectedTab("pending")}
        >
          Pending
        </button>
        <button
          className={
            selectedTab === "completed" ? styles.selected : styles.unselected
          }
          onClick={() => setSelectedTab("completed")}
        >
          Completed
        </button>
      </div>

      {selectedTab === "pending" ? (
        <div className={styles.ordersGrid}>
            {
                pendingOrders &&
                pendingOrders.map(order => <OrderCard key={order.id} order={order} />)
            }
        </div>
      ) : (
        <div className={styles.ordersGrid}>
            {
                completedOrders &&
                completedOrders.map(order => <OrderCard key={order.id} order={order} />)
            }
        </div>
      )}
      
    </div>
  );
};

export default OrdersPage;
