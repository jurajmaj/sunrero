import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import OrdersPage from "./pages/Orders";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="orders" element={<OrdersPage />} />
      </Routes>
    </Router>
  );
};

export default App;
