import React, { useState, useEffect } from "react";
import { fetchData } from "../../_api/fetchData";
import styles from "./Orders.module.css";
import OrderCard from "../../components/OrderCard";
import { Order } from '../../types/orderTypes';
import { useTranslation } from "react-i18next";

const OrdersPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"pending" | "completed">("pending");
  const [data, setData] = useState<Order[] | null>(null);
  const [pendingOrders, setPendingOrders] = useState<Order[] | null>(null);
  const [completedOrders, setCompletedOrders] = useState<Order[] | null>(null);
  const { t } = useTranslation();

  // fetching data
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    getData();
  }, []);

  const handleCancelOrder = (orderId: string) => {
    setPendingOrders(pendingOrders?.filter(order => order.id !== orderId) || null);
  }

  // filtering orders based on state
  useEffect(() => {
    if (data) {
      let pendingStates = ['new', 'waiting_for_confirmation', 'confirmed'];
      setPendingOrders(data.filter((order: Order) => pendingStates.includes(order.state)));
  
      let completedStates = ['completed', 'canceled_by_customer', 'rejected', 'expired', 'failed'];
      setCompletedOrders(data.filter((order: Order) => completedStates.includes(order.state)));
    }
  }, [data]);

  return (
    <div className={styles.orders}>
      <div className={styles.buttons}>
        <button
          className={
            selectedTab === "pending" ? styles.selected : styles.unselected
          }
          onClick={() => setSelectedTab("pending")}
        >
          {t('pending_orders')}
        </button>
        <button
          className={
            selectedTab === "completed" ? styles.selected : styles.unselected
          }
          onClick={() => setSelectedTab("completed")}
        >
          {t('completed_orders')}
        </button>
      </div>

      {selectedTab === "pending" ? (
        <div className={styles.ordersGrid}>
            {
                pendingOrders &&
                pendingOrders.map(order => <OrderCard key={order.id} order={order} onCancel={handleCancelOrder} />)
            }
        </div>
      ) : (
        <div className={styles.ordersGrid}>
            {
                completedOrders &&
                completedOrders.map(order => <OrderCard key={order.id} order={order} onCancel={handleCancelOrder}/>)
            }
        </div>
      )}
      
    </div>
  );
};

export default OrdersPage;
