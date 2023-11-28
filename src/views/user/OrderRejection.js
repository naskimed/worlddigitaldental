import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";

const OrderRejectionPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    // Handle the form submission, e.g., send the rejection reason to the server
    console.log('Rejection Reason:', data.rejectionReason);
    // Add your logic for handling the rejection data
    history.push('/user/rejected');
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 mx-auto mt-10 p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-red-600">Rejet de commande</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Raisons du rejet:
          </label>
          <textarea
            name="rejectionReason"
            id="rejectionReason"
            rows="10"
            ref={register()}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
          {errors && (
            <small className="text-red-500">{errors.rejectionReason.message}</small>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Envoyer le rejet
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderRejectionPage;
