// OrderItem.js
import React,{useState} from "react";
import { useHistory } from "react-router-dom";

const OrderCloutreCard = ({ order, onDelete }) => {


    // to handle the confirm, reject and ignore actions
    const history = useHistory();
    const handleAttach = () => {
    
        // Navigate to another page (replace '/confirmation-page' with the desired path)
        history.push("/admin/commandes_en_attente/pdf");
      };
    
      const handleReject = () => {
        
        // For simplicity, we are just logging the ignore for now
        console.log("Order Ignored:", order);

        // Handle rejection logic
        onDelete(order);
      };

    
    const buttonStyle = {
        backgroundColor: "#4CAF50", // Green when checked, gray when unchecked
        color: "white", // White text when checked, dark gray text when unchecked
        cursor: "pointer", // Pointer cursor when checked, not-allowed when unchecked
      };

  return (
          <div key={order.id} className="order-item border p-4 mb-4 flex flex-col items-start shadow-lg rounded-lg bg-blueGray-100 border-0">
            <h3 className="text-lg font-bold mb-2">{order.username}</h3>
            <p>Nom de patient: {order.patientName}</p>
            <p>Type: {order.type}</p>
            <p>Date: {order.date}</p>

            <button
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
              onClick={handleAttach}
              style={{ backgroundColor: "#14939C" }}
            >
              Afficher les détails
            </button>

            <button
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
              onClick={handleAttach}
              style={{ backgroundColor: "#14939C" }}
            >
              Afficher le method de paiement
            </button>

            <button
              className="bg-red-500 text-white px-4 py-2 mt-2 rounded"
              onClick={handleReject}
            //   style={{ backgroundColor: "#14939C" }}
            >
              Delete
            </button>
          </div>
  );
};

export default OrderCloutreCard;
