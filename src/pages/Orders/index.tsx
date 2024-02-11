import React, { useState } from "react";
import styles from "./Orders.module.css";

const OrdersPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"pending" | "completed">(
    "pending"
  );

  return (
    <div className={styles.orders}>
      <div className={styles.buttonContainer}>
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
        <div>
            <h1>Pending Orders</h1>
        </div>
      ) : (
        <div>
            <h1>Completed Orders</h1>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
