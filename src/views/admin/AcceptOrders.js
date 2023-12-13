import React, { useState, useEffect } from "react";
import 'assets/styles/OrderConfirmation.css';
import { useLocation } from "react-router-dom";
import ClientOrder from "components/Cards/CardClientOrder";

const AcceptOrder = ({ onConfirm, onReject }) => {
  const [activeLink, setActiveLink] = useState("");
  const [orders1, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedOrders, setSortedOrders] = useState([]);
  const location = useLocation();


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

  

  useEffect(() => {
    // Fetch orders from your API and set them in state
    const fetchOrders = async () => {
      try {
        const response = await fetch("your_api_endpoint");
        const data = await response.json();
        setOrders(data);
        setSortedOrders(data); // Initially, set sortedOrders to be the same as orders
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

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    // Filter orders based on the search term
    const filteredOrders = orders.filter((order) =>
      order.patientName.toLowerCase().includes(searchTerm)
    );

    setSortedOrders(filteredOrders);
  };

  const handleSortByDate = () => {
    // Sort orders by date
    const sortedByDate = [...sortedOrders].sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedOrders(sortedByDate);
  };


  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by patient name"
          value={searchTerm}
          onChange={handleSearch}
          className="px-2 py-1 border border-gray-300 rounded"
        />
        <button
          onClick={handleSortByDate}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sort by Date
        </button>
      </div>
      <div className="">
        {sortedOrders.map((order) => (
          <ClientOrder
            key={order.id}
            order={order}
            onConfirm={handleConfirm}
            onReject={handleReject}
          />
        ))}
      </div>
    </div>
  );
};

export default AcceptOrder;
