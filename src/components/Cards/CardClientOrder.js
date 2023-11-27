// OrderItem.js
import React,{useState} from "react";
import { useHistory } from "react-router-dom";

const ClientOrder = ({ order, onConfirm, onReject }) => {

    const showPdf = () => {
        // Replace 'your_pdf_url' with the actual URL of the PDF
        window.open('your_pdf_url', '_blank');
      };

    // to handle the confirm, reject and ignore actions
    const history = useHistory();
    const handleConfirm = () => {
        // Handle confirmation logic
        onConfirm(order);

        // For simplicity, we are just logging the confirmation for now
        console.log("Order confirmed:", order);
    
        // Navigate to another page (replace '/confirmation-page' with the desired path)
        history.push("/user/payment");
      };
    
      const handleReject = () => {
        
        // For simplicity, we are just logging the ignore for now
        console.log("Order rejected:", order);

        // Handle rejection logic
        onReject(order);
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
              onClick={showPdf}
              style={{ backgroundColor: "#14939C" }}
            >
              Afficher le PDF
            </button>

            <div className="mt-2 flex justify-end w-full">
              <button
                className="bg-green-500 text-white px-4 py-2 mr-2 rounded"
                onClick={(handleConfirm)}
                style={buttonStyle}
                // style={{ backgroundColor: "#2dce89" }}
              >
                Confirmer
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
                onClick={(handleReject)}
              >
                Rejeter
              </button>
            </div>
          </div>
  );
};

export default ClientOrder;
