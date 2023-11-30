// OrderItem.js
import React,{useState} from "react";
import { useHistory } from "react-router-dom";

const ClientOrder = ({ order}) => {
  const history = useHistory();

  const handleShowOrder = () => {
      // Handle confirmation logic
      history.push("/admin/commandes/commande");
    };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div key={order.id} className="order-item border p-4 mb-4 flex flex-col items-start shadow-lg rounded-lg bg-blueGray-100 border-0">
      <h3 className="text-lg font-bold mb-2">{order.username}</h3>
      <p>Nom de patient: {order.patientName}</p>
      <p>Type: {order.type}</p>
      <p>Date: {order.date}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        onClick={handleShowOrder}
        style={{ backgroundColor: "#14939C" }}
      >
        Afficher les détails 
      </button>
    <br/>
    </div>
  );
};

export default ClientOrder;
