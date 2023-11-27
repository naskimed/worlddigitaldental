// PaymentMethods.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const PaymentMethods = ({ onConfirm, onIgnore }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("none");
  const [errorMessage, setErrorMessage] = useState("");
  const [showInfo, setShowInfo] = useState(false); // New state for controlling visibility
  const history = useHistory();

  const handlePaymentMethodChange = (event) => {
    const selectedMethod = event.target.value;    
    setSelectedPaymentMethod(selectedMethod);
    // Clear error message when the user selects a new payment method
    setErrorMessage("");
    handleDisplayInformation(selectedMethod);
  };

  const handleConfirm = () => {
    if (selectedPaymentMethod === "none") {
      setErrorMessage("Veuillez choisir un moyen de paiement");
      return;
    }

    // Display specific information based on the selected payment method
    handleDisplayInformation(selectedPaymentMethod);

    // Call the backend API to confirm the payment if needed
    // ... (replace with actual API call)

    // Redirect to the confirmed page
    history.push("/user/confirmed");
  };

  const handleDisplayInformation = (paymentMethod) => {
    // Display specific information based on the selected payment method
    switch (paymentMethod) {
      case "moneyTransfer":
        setShowInfo(true);
        break;

      case "inPlace":
        setShowInfo(true);
        break;

      case "qrCode":
        setShowInfo(true);
        break;

      default:
        setShowInfo(false);
        break;
    }
  };

  const handleIgnore = () => {
    // Handle the ignore logic, e.g., make an API call

    // For demonstration purposes, we'll just show the confirmation component
    history.push("/user/ignored");
  };

  return (
    <>
      <br></br>
      <br></br>
      <div className="relative p-4 min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className=" mb-10 mx-auto max-w-md text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Méthodes de payement</h2>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Choisissez une méthode de paiement:
            </label>
            <select
              className="bg-white border border-gray-300 rounded px-4 py-2 w-full"
              value={selectedPaymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <option value="none" disabled>
                Choisissez une méthode de paiement
              </option>
              <option value="moneyTransfer">Transfert d'argent</option>
              <option value="inPlace">Paiement sur place</option>
              <option value="qrCode">Paiement avec QR Code</option>
            </select>
          </div>

          {/* Display error message if any */}
          {errorMessage && (
            <p className="text-red-500 mb-4">{errorMessage}</p>
          )}

          <br></br>
          {showInfo && (
            <div className="mb-6">
              <br></br>
              {/* Information for money transfer */}
              {selectedPaymentMethod === "moneyTransfer" && (
                <h1>Ceci est notre compte bancaire: xxxx xxxx xxxx xxxx</h1>
              )}

              {/* Information for payment on-site */}
              {selectedPaymentMethod === "inPlace" && (
                <h1>Merci pour ta confiance</h1>
              )}

              {/* Information for QR code payment */}
              {selectedPaymentMethod === "qrCode" && (
                <>
                  <h2>Merci de scanner ce code avec votre application mobile</h2>
                  {/* You can include an image tag here with the QR code image */}
                  <div className="flex items-center justify-center h-full">
                  <img 
                    alt="QR Code"
                    className="align-middle border-none max-w-full h-auto rounded-lg p-8" 
                    src={require("assets/img/qr-code.png")}  // Adjust image size if needed
                    style={{width:"350px"}}
                  />
                  </div>
                </>
              )}
            <br></br>
            <br></br> 
            </div>
          )}

          <div className="flex flex-col gap-4">
            {/* Payment by money transfer */}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded p-4 mb-4"
              onClick={handleConfirm}
              style={{ backgroundColor: "#14939C" }}
            >
              Confirmer
            </button>

            {/* Payment in the place */}
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded p-4 mb-4"
              onClick={handleIgnore}
            >
              Ignorer
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
