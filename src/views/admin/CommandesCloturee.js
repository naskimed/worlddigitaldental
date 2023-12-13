// OrderConfirmationPage.js
import React, { useState, useEffect } from "react";
import 'assets/styles/OrderConfirmation.css';
import { useLocation } from "react-router-dom";
import OrderCloutreCard from "components/Cards/CardOrderCloturee";

const OrderCloture = ({ onConfirm, onReject }) => {

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


  const handleDelete = (order) => {
    // Logic for rejecting the order
    console.log("Order Deleted:", order);
  };


  const orders = [
    {
      id: 1,
      username: "Doctor Foulen",
      patientName: "Foulen el Foulani",
      type: "Aligneur",
      date: "2023-01-01",
    },
    {
      id: 2,
      username: "Doctor Foulen 2",
      patientName: "Foulen el Foulani 2",
      type: "Aligneur",
      state: "En attente",
      date: "2023-02-01",
    },
    {
      id: 3,
      username: "Doctor Foulen 3",
      patientName: "Foulen el foulani 3",
      type: "Safety Guide",
      state: "En attente",
      date: "2023-01-01",
    },
    {
      id: 4,
      username: "Doctor Foulen 4",
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
          <OrderCloutreCard
          key={order.id}
          order={order}
          onReject={handleDelete}
        />
        ))}
      </div>
    </div>
  );
};

export default OrderCloture;
