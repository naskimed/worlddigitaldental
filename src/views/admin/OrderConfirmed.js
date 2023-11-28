import React from "react";

const OrderFirstConfirmation = () => {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>    
    <div className="flex flex-col items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="green"
        className="w-16 h-16 mb-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
      <h2 className="text-2xl font-bold text-green-600">Commande confirmée!</h2>
      <p className="text-gray-500">La commande est étiquetée comme commande en attente.</p>
    </div>

    </div>
  );
};

export default OrderFirstConfirmation;
