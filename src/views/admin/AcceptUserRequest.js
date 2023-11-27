// OrderConfirmationPage.js
import React, { useState, useEffect } from "react";
import 'assets/styles/OrderConfirmation.css';
import { useLocation } from "react-router-dom";
import UserRequests from "components/Cards/CardAdminUser";

const AcceptUsers = ({ onConfirm, onReject}) => {

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

  const orders = [
    {
      id: 1,
      username: "Foulen el Foulani",
      firstname: "Foulen",
      lastname: "el FOulani",
      gender: "Homme",
      job: "dentist",
      email: "dentist@wdd.com",
      num : "79392793",
      mobile: "58305829",
      adresse: "technopole",
      ville: "Ariana, Gazela",
      pays: "Tunisia",
      matricul: "1242-21434-35-53235"
    },
    {
        id: 2,
        username: "Foulen el Foulani 2",
        firstname: "Foulen",
        lastname: "el FOulani 2",
        gender: "Homme",
        job: "dentist",
        email: "dentist2@wdd.com",
        num : "79392793",
        mobile: "58305859",
        adresse: "technopole",
        ville: "Ariana, Gazela",
        pays: "Tunisia",
        matricul: "1242-21434-35-53235"
    },
    {
        id: 3,
        username: "Foulen el Foulani 3",
        firstname: "Foulen",
        lastname: "el FOulani 3",
        gender: "Homme",
        job: "dentist",
        email: "dentist@wdd.com",
        num : "79392793",
        mobile: "58305829",
        adresse: "technopole",
        ville: "Ariana, Gazela",
        pays: "Tunisia",
        matricul: "1242-21434-35-53235"
    },
    {
        id: 4,
        username: "Foulen el Foulani 4",
        firstname: "Foulen",
        lastname: "el FOulani 4",
        gender: "Homme",
        job: "dentist",
        email: "dentist4@wdd.com",
        num : "79392793",
        mobile: "58305829",
        adresse: "technopole",
        ville: "Ariana, Gazela",
        pays: "Tunisia",
        matricul: "1242-21434-35-53235"
    },
  ];

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
      <div className="">
        {orders.map((order) => (
          <UserRequests
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
export default AcceptUsers;
