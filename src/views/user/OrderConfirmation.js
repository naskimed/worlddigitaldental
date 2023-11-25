// OrderConfirmationPage.js
import React, { useState, useEffect } from "react";
import 'assets/styles/OrderConfirmation.css';
import { useLocation } from "react-router-dom";
import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";
import OrderItem from "components/Cards/CardOrder";

const OrderConfirmation = ({ onConfirm, onReject, onIgnore }) => {

  const [activeLink, setActiveLink] = useState("");
  const [orders1, setOrders] = useState([]); // Just for now. we need to change orders1 ==> orders in the dynamic part
  const location = useLocation();

  useEffect(() => {
    // Fetch orders from your API and set them in state
    const fetchOrders = async () => {
      try {
        const response = await fetch("your_api_endpoint");
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []); // Run this effect only once on component mount

  const isLinkActive = (link) => {
    return activeLink === link;
  };

  const handleConfirm = (order) => {
    // Logic for confirming the order
    console.log("Order confirmed:", order);
  };

  const handleReject = (order) => {
    // Logic for rejecting the order
    console.log("Order rejected:", order);
  };

  const handleIgnore = (order) => {
    // Logic for ignoring the order
    console.log("Order ignored:", order);
  };

  const orders = [
    {
      id: 1,
      patientName: "Foulen el Foulani",
      type: "Aligneur",
      state: "En attente",
      date: "2023-01-01",
    },
    {
      id: 2,
      patientName: "Foulen el Foulani 2",
      type: "Aligneur",
      state: "En attente",
      date: "2023-02-01",
    },
    {
      id: 3,
      patientName: "Foulen el foulani 3",
      type: "Safety Guide",
      state: "En attente",
      date: "2023-01-01",
    },
    {
      id: 4,
      patientName: "Foulen el foulani 4",
      type: "Guide",
      state: "En attente",
      date: "2023-02-01",
    },
  ];

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
      <div className="grid grid-cols-3 order-grid">
        {orders.map((order) => (
          <OrderItem
          key={order.id}
          order={order}
          onConfirm={handleConfirm}
          onReject={handleReject}
          onIgnore={handleIgnore}
        />
        ))}
      </div>
    </div>
  );
};

export default OrderConfirmation;
