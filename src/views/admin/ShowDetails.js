import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

const ShowDetails = () => {
  const history = useHistory();
  const { orderId } = useParams(); // Assuming you have the order ID in the route params

  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherInputValue, setOtherInputValue] = useState('');

  const [pdfData, setPdfData] = useState(null);
  const [validationOptions, setValidationOptions] = useState({
    missingValue: false,
    fileNotWorking: false,
    invalidConception: false,
  });

  useEffect(() => {
    // Fetch PDF data and order details from your API endpoint based on orderId
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`http://example.com/api/orders/${orderId}`); // Replace with your API endpoint
        if (response.ok) {
          const orderData = await response.json();
          setPdfData(orderData.pdfData); // Assuming you have a field named 'pdfData' in your order data
        } else {
          console.error('Failed to fetch order details.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  const handleCheckboxChange = (option) => {
    if (option === 'other') {
      setShowOtherInput((prevShowOtherInput) => !prevShowOtherInput);
    } else {
      setValidationOptions((prevOptions) => ({
        ...prevOptions,
        [option]: !prevOptions[option],
      }));
    }
  };  

  const handleAccept = () => {
    // Handle accept logic, e.g., update order status in the database
    console.log('Order accepted. Redirecting...');
    history.push('/admin/orders'); // Redirect to the admin orders page
  };

  const handleReject = async () => {
    // Check if at least one checkbox is checked or if "Other" checkbox is checked with some text entered
    if (
      Object.values(validationOptions).some((option) => option) ||
      ( showOtherInput )
    ) {
      try {
        // Assuming you have an API endpoint to delete the order and send checkbox text
        const response = await fetch(`http://example.com/api/orders/${orderId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...validationOptions,
            otherReason: showOtherInput ? otherInputValue : '',
          }),
        });
  
        if (response.ok) {
          console.log('Order rejected and data sent to the backend.');
          history.push('/admin/orders'); // Redirect to the admin orders page
        } else {
          console.error('Failed to delete order or send data to the backend.');
        }
      } catch (error) {
        console.error('Error:', error);
        history.push('/admin/orders'); // Redirect to the admin orders page
      }
    } else {
      console.error('Please select at least one reason or provide an "Other" reason before rejecting the order.');
    }
  };
  

  const styles = StyleSheet.create({
    container: {
      borderRadius: 8,
      padding: 20,
      maxWidth: 600,
      display: 'flex',
      flexDirection: 'column',
    },
    page: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 20,
      marginBottom: 10,
    },
    checkboxLabel: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 10,
    },
    checkbox: {
      marginRight: 10,
    },
    buttonsContainer: {
      justifyContent: 'space-between',
      marginTop: 20,
      flexDirection: 'column',
      alignItems: 'center',
    },
    acceptButton: {
      backgroundColor: '#2ecc71',
      color: 'white',
      padding: '10px 20px',
      borderRadius: 5,
      cursor: 'pointer',
    },
    rejectButton: {
      backgroundColor: Object.values(validationOptions).some((option) => option || (showOtherInput)) ? "#e74c3c" : "#ddd", // Green when checked, gray when unchecked
      color: Object.values(validationOptions).some((option) => option || (showOtherInput)) ? "white" : "#555", // White text when checked, dark gray text when unchecked
      cursor: Object.values(validationOptions).some((option) => option || (showOtherInput)) ? "pointer" : "not-allowed", // Pointer cursor when checked, not-allowed when unchecked
      padding: '10px 20px',
      borderRadius: 5,
      cursor: 'pointer',
      marginLeft: 20,
    },
  });

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 p-8">

    <div className="flex flex-col">
      <h2 className="text-3xl font-bold mb-6 text-red-600 text-center">Order Details</h2>
      <div style={styles.container}>
        {/* Display the PDF in a styled container */}
        {pdfData && (
          <div>
            <Document file={pdfData}>
              <Page pageNumber={1} />
            </Document>
          </div>
        )}
        {/* Validation checkboxes */}
        <div>
          <div style={styles.checkboxLabel}>
            <input
              type="checkbox"
              id="missingValueCheckbox"
              checked={validationOptions.missingValue}
              onChange={() => handleCheckboxChange('missingValue')}
              style={styles.checkbox}
            />
            <label htmlFor="missingValueCheckbox">The document is missing a value</label>
          </div>
          <div style={styles.checkboxLabel}>
            <input
              type="checkbox"
              id="fileNotWorkingCheckbox"
              checked={validationOptions.fileNotWorking}
              onChange={() => handleCheckboxChange('fileNotWorking')}
              style={styles.checkbox}
            />
            <label htmlFor="fileNotWorkingCheckbox">The 3D file is not working</label>
          </div>
          <div style={styles.checkboxLabel}>
            <input
              type="checkbox"
              id="invalidConceptionCheckbox"
              checked={validationOptions.invalidConception}
              onChange={() => handleCheckboxChange('invalidConception')}
              style={styles.checkbox}
            />
            <label htmlFor="invalidConceptionCheckbox">The conception of the 3D model is not valid</label>
          </div>

          <div style={styles.checkboxLabel}>
            <input
              type="checkbox"
              id="otherCheckbox"
              checked={showOtherInput}
              onChange={() => handleCheckboxChange('other')}
              style={styles.checkbox}
            />
            <label htmlFor="otherCheckbox">Other</label>
          {showOtherInput && (
            <div style={{ marginLeft: '30px', marginTop: '10px' }}>
              <input
                type="text"
                placeholder="Enter reason"
                value={otherInputValue}
                onChange={(e) => setOtherInputValue(e.target.value)}
                style={{ padding: '5px' }}
              />
            </div>
          )}
          </div>
        </div>
        {/* Accept and reject buttons */}
        <div style={styles.buttonsContainer}>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAccept}
            style={styles.acceptButton}
          >
            Accepter
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleReject}
            disabled={!Object.values(validationOptions).some((option) => option || (showOtherInput))}
            style={styles.rejectButton}
          >
            Rejeter
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ShowDetails;
