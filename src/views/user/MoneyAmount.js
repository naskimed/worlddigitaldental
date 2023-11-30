import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { saveAs } from 'file-saver';
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

const OrderPaymentPage = () => {
  const history = useHistory();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [pdfData, setPdfData] = useState(null);

  useEffect(() => {
    // Fetch PDF data from your API endpoint
    const fetchPdfData = async () => {
      try {
        const response = await fetch('http://example.com/api/getPdf'); // Replace with your API endpoint
        if (response.ok) {
          const pdfBlob = await response.blob();
          setPdfData(pdfBlob);
        } else {
          console.error('Failed to fetch PDF data.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPdfData();
  }, []);

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handleAccept = () => {
    if (isCheckboxChecked) {
      // Handle payment logic
      console.log('Payment accepted. Redirecting...');
      // You can redirect to a success page or perform other actions here
      history.push('/user/payment');
    } else {
      console.error('Please accept the amount before proceeding.');
      history.push('/user/payment');
    }
  };

  const styles = StyleSheet.create({
    container: {
      border: '2px solid #000000',
      borderRadius: 8,
      padding: 20,
      maxWidth: 800, // Set the maximum width of the container
      minWidth: 800,
      minHeight: 500,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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
    checkIcon: {
      color: '#27ae60',
      fontSize: 50,
      marginBottom: 10,
    },
  });

  const generatePdf = () => {
    if (pdfData) {
      const pdfBlob = new Blob([pdfData], { type: 'application/pdf' });
      const pdfName = 'order_details.pdf'; // Replace with a meaningful name

      // Creating a PDF document using @react-pdf/renderer
      const pdfDocument = (
        <Document>
          <Page size="A4" style={styles.page}>
            <View>
              <Text style={styles.text}>Order Details</Text>
              {/* Add more text or components based on your PDF content */}
            </View>
          </Page>
        </Document>
      );

      // Generate the PDF file
      saveAs(pdfBlob, pdfName);
    }
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

    <div className="flex flex-col items-center">
    <br />
      <h2 className="text-3xl font-bold mb-6 text-center text-red-600">Payment Details</h2>
      <div style={styles.container}>
        {/* Display the PDF in a styled container */}
        {pdfData && (
          <div>
            <Document file={pdfData}>
              <Page pageNumber={1} />
            </Document>
            {/* Use Unicode checkmark symbol */}
            <span role="img" aria-label="check" style={styles.checkIcon}>
              ✅
            </span>
          </div>
        )}
      </div>
      <div className="flex items-center mb-3">
        <label className="mr-2" htmlFor="acceptCheckbox">
          I accept the amount and can pay it
        </label>
        <input
          type="checkbox"
          id="acceptCheckbox"
          checked={isCheckboxChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <br/>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAccept}
        disabled={!isCheckboxChecked}
        style={{
          backgroundColor: isCheckboxChecked ? '#4CAF50' : '#ddd',
          color: isCheckboxChecked ? 'white' : '#555',
          cursor: isCheckboxChecked ? 'pointer' : 'not-allowed',
        }}
      >
        Accept and Pay
      </button>
      <br />
    </div>
    </div>
  );
};

export default OrderPaymentPage;
