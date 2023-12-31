// OrderItem.js
import React,{useState} from "react";
import { useHistory } from "react-router-dom";

const OrderItem = ({ order, onConfirm, onReject}) => {

  const showPdf = () => {
    // Assuming the order object has a 'pdfUrl' property containing the PDF URL
    if (order.pdfUrl) {
      window.open(order.pdfUrl, '_blank');
    } else {
      console.error("PDF URL not available for this order.");
    }
  };

    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);  
    const handleCheckboxChange = () => {
        setIsCheckboxChecked(!isCheckboxChecked);
        };

    // to handle the confirm, reject and ignore actions
    const history = useHistory();
    const handleConfirm = () => {
        // Handle confirmation logic
        onConfirm(order);

        // For simplicity, we are just logging the confirmation for now
        console.log("Order confirmed:", order);
    
        // Navigate to another page (replace '/confirmation-page' with the desired path)
        history.push("/user/confirmation/amount");
      };
    
      const handleReject = () => {
        
        // For simplicity, we are just logging the ignore for now
        console.log("Order rejected:", order);

        // Handle rejection logic
        onReject(order);
      };
    
    
    const buttonStyle = {
        backgroundColor: isCheckboxChecked ? "#4CAF50" : "#ddd", // Green when checked, gray when unchecked
        color: isCheckboxChecked ? "white" : "#555", // White text when checked, dark gray text when unchecked
        cursor: isCheckboxChecked ? "pointer" : "not-allowed", // Pointer cursor when checked, not-allowed when unchecked
      };

  return (
          <div key={order.id} className="order-item border p-4 mb-4 flex flex-col items-start shadow-lg rounded-lg bg-blueGray-100 border-0">
            <h3 className="text-lg font-bold mb-2">{order.patientName}</h3>
            <p>Type: {order.type}</p>
            <p>État: {order.state}</p>
            <p>Date: {order.date}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
              onClick={showPdf}
              style={{ backgroundColor: "#14939C" }}
            >
              Afficher le PDF
            </button>
            <div className="mt-3 flex items-center">
              <label className="mr-2" htmlFor={`confirmCheckbox_${order.id}`}>
              j'accepte les conditions générales et la politique de confidentialité
              </label>
              <input type="checkbox" 
                id={`confirmCheckbox_${order.id}`}
                checked={isCheckboxChecked}
                onChange={handleCheckboxChange} 
                />
            </div>
            <div className="mt-2 flex justify-end w-full">
              <button
                className="bg-green-500 text-white px-4 py-2 mr-2 rounded"
                onClick={(handleConfirm)}
                disabled={!isCheckboxChecked}  
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

export default OrderItem;
