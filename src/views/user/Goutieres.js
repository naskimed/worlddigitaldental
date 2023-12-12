import React, { useState } from 'react';
import "assets/styles/RectCard.css"
import { useHistory } from 'react-router-dom'
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import axios from 'axios';


export default function GC_PCI() {

    const [isFormValid, setIsFormValid] = useState(true);
    const [formError, setFormError] = useState(false); // New state variable for form errors

    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      dob: '',
      modelesProduire: '',
      weTransferLink: '',
    }); 
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    
    const history = useHistory();

    const validateForm = () => {
        const {
          firstName,
          lastName,
          dob,
          modelesProduire,
          weTransferLink,
        } = formData;
      
        const requiredFields = [
          firstName,
          lastName,
          dob,
          modelesProduire,
          weTransferLink,
        ];
      
        const isFormValid = requiredFields.every((field) => field.trim() !== '');
        setIsFormValid(isFormValid);
      
        return isFormValid;
      };
      
      const handleSubmit = async () => {
        if (validateForm()) {
          try {
            // You may want to replace the URL with your actual API endpoint
            const response = await axios.post('/dashboard', formData);
    
            if (response.status === 200) {
              // Handle a successful submission, e.g., show a success message, redirect, etc.
              console.log('Form submitted successfully');
              history.push("/user/to_confirm");
            } 
          } catch (error) {
            // Handle errors related to the API request
            console.error('An error occurred during form submission:', error);
            history.push("/user/to_confirm");

          }
        }
        else {
          // If the form is not valid, set formError to true
          setFormError(true);
          history.push("/user/to_confirm");

        }    
      };  

      const PdfStyles = StyleSheet.create({
        container: {
          padding: 20,
          fontFamily: 'Helvetica',
        },
        heading: {
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 10,
        },
        text: {
          fontSize: 12,
          marginBottom: 8,
        },
        image: {
          width: 200,
          height: 150,
          marginBottom: 10,
        },
      });

      const [pdfData, setPdfData] = useState(null);
      const generatePdf = async () => {
        if (validateForm()) {
          try {
            // Generate PDF using form data
            const pdfBlob = await generatePdfDocument();
            
            // Create a data URL for the blob
            const dataUrl = URL.createObjectURL(pdfBlob);
    
            // Set the data URL in state
            setPdfData(dataUrl);

            // Send the PDF to the server
            await savePdfOnServer(pdfBlob);
          
          } catch (error) {
            console.error('Error generating PDF:', error);
          }
        } else {
          setFormError(true);
        }
      };
    
      const generatePdfDocument = async () => {
        // Use @react-pdf/renderer to create a PDF document
        // Customize the PDF content based on your form data
        const { PDFViewer, pdf } = require('@react-pdf/renderer');
    
        const MyDocument = () => (
          <Document>
            <Page size="A4" style={PdfStyles.container}>
              <View>
              <Image
                src="/assets/img/WDD.png" // Replace with the actual path to your image
                style={PdfStyles.image}// Set the desired width and height
              />
              <Text style={PdfStyles.heading}>{`Goutieres`}</Text>
              <Text style={PdfStyles.text}>{`Nom du patient: ${formData.firstName} ${formData.lastName}`}</Text>
              <Text style={PdfStyles.text}>{`Date de naissance: ${formData.dob}`}</Text>
              <Text style={PdfStyles.text}>{`Model: ${formData.modelesProduire}`}</Text>
              </View>
            </Page>
          </Document>
        );
    
        const pdfBlob = await pdf(<MyDocument />).toBlob();
        return pdfBlob;
      };

      const savePdfOnServer = async (pdfBlob) => {
        try {
          // Create a FormData object to send the PDF file
          const formData = new FormData();
          formData.append('pdfFile', pdfBlob, 'generated-pdf.pdf');
      
          // Send a POST request to your server endpoint for handling file uploads
          const response = await axios.post('/api/upload-pdf', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
      
          // Handle the response from the server as needed
          console.log('PDF saved on the server:', response.data);
        } catch (error) {
          console.error('Error saving PDF on the server:', error);
        }
      };
    
      const downloadPdf = () => {
        saveAs(pdfData, 'generated-pdf.pdf');
      };



  return (
<> 

    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Nouvelle Commande</h6>
          </div>
        </div>
    <br></br>
    <div className="flex flex-col my-2 lg:flex-row">
      <div className="w-full lg:w-1/2 lg:pr-3 px-6 mb-6">
        <label htmlFor="patient-first-name" className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
          Nom du patient
        </label>
        <input
          type="text"
          id="patient-first-name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
          placeholder="Nom du patient"
        />

        <label htmlFor="patient-last-name" className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
          Prenom du patient
        </label>
        <input
          type="text"
          id="patient-last-name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
          placeholder="Prenom du patient"
        />

      </div>

      <div className="w-full lg:w-1/2 lg:pl-3 px-6 mb-6">

      <label htmlFor="patient-dob" className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Date de naissance
          </label>
          <input
            type="date"
            id="patient-dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
          />


        <label htmlFor="modeles-produire" className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Les Gouttieres a produire
          </label>
          <select
            id="modeles-produire"
            name="modelesProduire"
            value={formData.modelesProduire}
            onChange={handleChange}
            className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 rounded"
          >
            <option value="">Choisir une option</option>
            <option value="Maxillaire">Maxillaire</option>
            <option value="Mandibulaire">Mandibulaire</option>
            <option value="Both">Les deux</option>
        </select>

      </div>
    
      {/* Other fields go here, follow the same pattern */}
    </div>
        <div className="md:w-1/2 px-6 mb-6 md:mb-0">

          <br></br>

          <label htmlFor="weTransfer-link" className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Lien du dossier des fichiers STL et DICOM uploader sur WeTransfer
          </label>
          <textarea
            id="weTransfer-link"
            name="weTransferLink"
            value={formData.weTransferLink}
            onChange={handleChange}
            rows="1"  // Adjust the number of rows as needed
            className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 rounded"
            placeholder="Entrez le lien ici"
          />

            <br></br>

          {formError && (
          <div className="text-red-500 text-s">
            Veuillez remplir tous les champs obligatoires avant de soumettre.
          </div>
          )}

          <br></br>


          <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
            id="submitbuttonNC"
            onClick={generatePdf}
          >
            Vérifiez votre commande
          </button>
          <div className="flex">
            <div className="mr-auto">
              {/* "mr-auto" adds margin to the right, pushing the button to the left */}
              <button
                type="button"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
                id="submitbuttonNC"
                onClick={handleSubmit}
              >
                Envoyer
              </button>
            </div>
          </div>
        </div>

        {pdfData && (
        <div>
          <br></br>
          <button onClick={downloadPdf} style={{color:"#034542"}}>Download PDF</button>
          {/* Display the PDF using <PDFViewer /> if needed */}
        </div>
      )}

        </div>
  </div>
</>
  );
}

 
