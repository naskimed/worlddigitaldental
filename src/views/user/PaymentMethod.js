// PaymentMethods.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const PaymentMethods = ({ onConfirm, onIgnore }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("none");
  const [selectedAction, setSelectedAction] = useState("none");
  
const history = useHistory();

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleConfirmOrIgnore = () => {
    // Communicate with the backend based on the selected choice
    if (selectedPaymentMethod === "none" || selectedAction === "none") {
      // Handle the case where either payment method or action is not selected
      console.error("Please select both payment method and action");
      return;
    }

    // Call the backend API based on the selected payment method and action
    if (selectedAction === "confirm") {
      confirmPayment();
    } else if (selectedAction === "ignore") {
      ignorePayment();
    }
  };

  const confirmPayment = () => {
    // Call the backend API to confirm the payment
    console.log(`Confirming payment with method: ${selectedPaymentMethod}`);
    // ... (replace with actual API call)
    history.push("/user/confirmed");

  };

  const ignorePayment = () => {
    // Call the backend API to ignore the payment
    console.log(`Ignoring payment with method: ${selectedPaymentMethod}`);
    // ... (replace with actual API call)
  };

  return (
    <>
    <br></br>
    <br></br>
    <div className="relative p-4 min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

    <div className=" mb-10 mx-auto max-w-md text-center p-8">
      <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Select a payment method:
        </label>
        <select
          className="bg-white border border-gray-300 rounded px-4 py-2 w-full"
          value={selectedPaymentMethod}
          onChange={handlePaymentMethodChange}
        >
          <option value="none" disabled>
            Select a payment method
          </option>
          <option value="moneyTransfer">Payment by Money Transfer</option>
          <option value="inPlace">Payment in the Place</option>
          <option value="qrCode">Payment with QR Code</option>
        </select>
      </div>

      <br></br> 

      <div className="flex flex-col gap-4">
        {/* Payment by money transfer */}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded p-4 mb-4"
          onClick={(confirmPayment)}
          style={{ backgroundColor: "#4CAF50" }}
        >
          Confirm
        </button>

        {/* Payment in the place */}
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded p-4 mb-4"
          onClick={(ignorePayment)}
        >
          Ignore
        </button>
      </div>
      <br></br>
      <br></br>
    </div>

    </div>

    </> 
  );
};

export default PaymentMethods;
