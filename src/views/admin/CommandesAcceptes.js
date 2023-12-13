import React, { useState, useEffect } from "react";
import 'assets/styles/OrderConfirmation.css';
import { useLocation } from "react-router-dom";
import ConfirmOrder from "components/Cards/CardConfirmOrder";

const ConfirmWaitingOrder = ({ onConfirm, onReject }) => {
  const [activeLink, setActiveLink] = useState("");
  const [orders1, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedOrders, setSortedOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 4; // Number of orders to display per page

    const orders = [
    {
      id: 1,
      username: "Doctor Foulen",
      patientName: "Foulen el Foulani",
      type: "Aligneur",
      date: "2023-01-01",
      payment : "Avec QR Code",
    },
    {
      id: 2,
      username: "Doctor Foulen 2",
      patientName: "Foulen el Foulani 2",
      type: "Aligneur",
      state: "En attente",
      date: "2023-02-01",
      payment : "Avec QR Code",
    },
    {
      id: 3,
      username: "Doctor Foulen 3",
      patientName: "Foulen el foulani 3",
      type: "Safety Guide",
      state: "En attente",
      date: "2023-01-01",
      payment : "Avec QR Code",
    },
    {
      id: 4,
      username: "Doctor Foulen 4",
      patientName: "Foulen el foulani 4",
      type: "Guide",
      state: "En attente",
      date: "2023-02-01",
      payment : "Avec QR Code",
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

  // Calculate total pages based on ordersPerPage
  const totalPages = Math.ceil(sortedOrders.length / ordersPerPage);

  // Pagination functions
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Calculate the range of orders to display for the current page
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = sortedOrders.slice(indexOfFirstOrder, indexOfLastOrder);

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
      <div className="grid grid-cols-3 order-grid">
        {currentOrders.map((order) => (
          <ConfirmOrder
            key={order.id}
            order={order}
            onConfirm={handleConfirm}
            onReject={handleReject}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i + 1} onClick={() => goToPage(i + 1)} disabled={currentPage === i + 1}>{i + 1}</button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default ConfirmWaitingOrder;
