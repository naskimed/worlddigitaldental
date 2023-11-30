import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const OrderRejectionPage = () => {
  const history = useHistory();
  const [selectedRejectionReason, setSelectedRejectionReason] = useState('');

  const handleRejectionReasonChange = (reason) => {
    setSelectedRejectionReason(reason);
  };

  const onSubmit = async () => {
    // Check if a rejection reason is selected
    if (selectedRejectionReason) {
      try {
        const response = await fetch('http://localhost:5000/api/rejectOrder', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ rejectionReason: selectedRejectionReason }),
        });

        if (response.ok) {
          console.log('Order rejection information saved successfully.');
          history.push('/user/rejected');
        } else {
          console.error('Failed to save order rejection information.');
        }
      } catch (error) {
        console.error('Error:', error);
        history.push('/user/rejected');
      }
    } else {
      console.error('Please select a rejection reason.');
    }
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 mx-auto mt-10 p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-red-600">Rejet de commande</h2>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Raisons du rejet:</label>
        <div className="flex flex-col space-y-4">
          <button
            type="button"
            className="bg-blue-700 text-white font-bold py-2 px-4 rounded p-8 mg-4"
            onClick={() => handleRejectionReasonChange('MissingInformation')}
            style={{
              backgroundColor: selectedRejectionReason === 'MissingInformation' ? '#14939C' : '#ddd',
              color: selectedRejectionReason === 'MissingInformation' ? 'white' : '#555',
              margin: '5px',
            }}          >
            The order is missing information
          </button>
          {/* Add similar buttons for other rejection reasons */}
          <button
            type="button"
            className={`${
              selectedRejectionReason === 'ProblemSpecifications'
            } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            onClick={() => handleRejectionReasonChange('ProblemSpecifications')}
            style={{
              backgroundColor: selectedRejectionReason === 'ProblemSpecifications' ? '#14939C' : '#ddd',
              color: selectedRejectionReason === 'ProblemSpecifications' ? 'white' : '#555',
              margin: '5px',
            }}
          >
            There is problem with the specifications
          </button>
          {/* Add similar buttons for other rejection reasons */}
          <button
            type="button"
            className={`${
              selectedRejectionReason === 'CancelCommand'
            } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            onClick={() => handleRejectionReasonChange('CancelCommand')}
            style={{
              backgroundColor: selectedRejectionReason === 'CancelCommand' ? '#14939C' : '#ddd',
              color: selectedRejectionReason === 'CancelCommand' ? 'white' : '#555',
              margin: '5px',
            }}
          >
            I want to cancel the command
          </button>
                    {/* Add similar buttons for other rejection reasons */}
                    <button
            type="button"
            className={`${
              selectedRejectionReason === 'Other'
            } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            onClick={() => handleRejectionReasonChange('Other')}
            style={{
              backgroundColor: selectedRejectionReason === 'Other' ? '#14939C' : '#ddd',
              color: selectedRejectionReason === 'Other' ? 'white' : '#555',
              margin: '5px',
            }}
          >
            Other
          </button>
        </div>
        {selectedRejectionReason === 'Other' && (
          <textarea
            name="otherReason"
            rows="8"
            className="w-full mt-2 px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        )}
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={onSubmit}
          disabled={!selectedRejectionReason}
          style={{
            backgroundColor: selectedRejectionReason ? '#4CAF50' : '#ddd',
            color: selectedRejectionReason ? 'white' : '#555',
            cursor: selectedRejectionReason ? 'pointer' : 'not-allowed',
          }}
        >
          Envoyer le rejet
        </button>
      </div>
    </div>
  );
};

export default OrderRejectionPage;
