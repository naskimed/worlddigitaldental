// OrderItem.js
import React,{useState} from "react";
import { useHistory } from "react-router-dom";

const UserRequests = ({ order, onConfirm, onReject }) => {

    // to handle the confirm, reject and ignore actions
    const history = useHistory();
    const handleConfirm = () => {
        // Handle confirmation logic
        onConfirm(order);

        // For simplicity, we are just logging the confirmation for now
        console.log("Order confirmed:", order);
    
        // Navigate to another page (replace '/confirmation-page' with the desired path)
        history.push("/admin/accept_user");
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
            <h3 className="text-lg font-bold mb-2">DEMANDE DE: {order.username}</h3>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
            <div className="grid grid-cols-2 order-grid">
            <p>Nom: {order.firstname}</p>
            <p>Prenom: {order.lastname}</p>
            <p>Sexe: {order.gender}</p>
            <p>Travail: {order.job}</p>
            <p>Email: {order.email}</p>
            <p>Num: {order.num}</p>
            <p>Mobile: {order.mobile}</p>
            <p>Adresse: {order.adresse}</p>
            <p>Ville: {order.ville}</p>
            <p>Pays: {order.pays}</p>
            <p>Matricul Fiscal: {order.matricul}</p>
            </div>
            </div>
            {/* <div className="mt-3 flex items-center">
              <label className="mr-2" htmlFor={`confirmCheckbox_${order.id}`}>
              j'accepte les conditions générales et la politique de confidentialité
              </label>
              <input type="checkbox" 
                id={`confirmCheckbox_${order.id}`}
                checked={isCheckboxChecked}
                onChange={handleCheckboxChange} 
                />
            </div> */}
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

export default UserRequests;

