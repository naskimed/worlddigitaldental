import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const OrderRejected = ({ order, onDelete }) => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const history = useHistory();

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handleDelete = () => {
    console.log("Order rejected:", order);
    history.push("/user/termination");
    onDelete(order);
  };

  const downloadPdf = () => {
    if (order.pdfUrl) {
      fetch(order.pdfUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "document.pdf");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error) => console.error("Error downloading PDF:", error));
    } else {
      console.error("PDF URL not available for this order.");
    }
  };


  return (
    <div key={order.id} className="order-item border p-4 mb-4 flex flex-col items-start shadow-lg rounded-lg bg-blueGray-100 border-0">
      <h3 className="text-lg font-bold mb-2">{order.patientName}</h3>
      <p>Type: {order.type}</p>
      <p>État: {order.state}</p>
      <p>Date: {order.date}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        onClick={downloadPdf}
        style={{ backgroundColor: "#14939C" }}
      >
        Rejection reason
      </button>

      <div className="mt-2 flex justify-end w-full">
        <button
          className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
          onClick={handleDelete}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default OrderRejected;
