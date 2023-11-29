// OrderItem.js
import React,{useState} from "react";
import { useHistory } from "react-router-dom";

const ClientOrder = ({ order, onConfirm, onReject }) => {
  const history = useHistory();

  const showPdf = () => {
    // Assuming the order object has a 'pdfUrl' property containing the PDF URL
    if (order.pdfUrl) {
      window.open(order.pdfUrl, '_blank');
    } else {
      console.error("PDF URL not available for this order.");
    }
  };

  const handleConfirm = () => {
    // Handle confirmation logic
    onConfirm(order);

    // For simplicity, we are just logging the confirmation for now
    console.log("Order confirmed:", order);

    // Navigate to another page (replace '/confirmation-page' with the desired path)
    history.push("/admin/order_first_confirmation");
  };

  const handleReject = () => {
    // For simplicity, we are just logging the ignore for now
    console.log("Order rejected:", order);

    // Handle rejection logic
    onReject(order);
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
        onClick={showPdf}
        style={{ backgroundColor: "#14939C" }}
      >
        Afficher le PDF
      </button>

      <div className="mt-2 flex justify-end w-full">
        <button
          className="bg-green-500 text-white px-4 py-2 mr-2 rounded"
          onClick={handleConfirm}
          style={buttonStyle}
        >
          Confirmer
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
          onClick={handleReject}
        >
          Rejeter
        </button>
      </div>
    </div>
  );
};

export default ClientOrder;
