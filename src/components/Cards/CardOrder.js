// OrderItem.js
import React,{useState} from "react";
import { useHistory } from "react-router-dom";

const OrderItem = ({ order, onConfirm, onReject, onIgnore }) => {

    const showPdf = () => {
        // Replace 'your_pdf_url' with the actual URL of the PDF
        window.open('your_pdf_url', '_blank');
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
        history.push("/user/dashboard/");
      };
    
      const handleReject = () => {
        
        // For simplicity, we are just logging the ignore for now
        console.log("Order rejected:", order);

        // Handle rejection logic
        onReject(order);
      };
    
      const handleIgnore = () => {

        // For simplicity, we are just logging the ignore for now
        console.log("Order ignored:", order);

        // Handle ignore logic
        onIgnore(order);
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
            <p>State: {order.state}</p>
            <p>Date: {order.date}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
              onClick={showPdf}
              style={{ backgroundColor: "#14939C" }}
            >
              View PDF
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
                Confirm
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
                onClick={(handleReject)}
              >
                Reject
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={(handleIgnore)}
                style={{ backgroundColor: "#808080" }}
              >
                Ignore
              </button>
            </div>
          </div>
  );
};

export default OrderItem;
