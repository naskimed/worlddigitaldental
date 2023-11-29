import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faUpload } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const PdfUploadPage = () => {
  const { register, handleSubmit, errors, setValue, watch } = useForm();
  const [selectedFileName, setSelectedFileName] = useState('');
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      if (data.pdf) {
        const formData = new FormData();
        formData.append('pdf', data.pdf[0]);

        // Replace 'YOUR_UPLOAD_API_ENDPOINT' with your actual API endpoint
        const response = await fetch('YOUR_UPLOAD_API_ENDPOINT', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('PDF uploaded successfully');
          history.push('/admin/pdf_envoyee');
          // Handle success (e.g., show a success message)
        } else {
          console.error('Failed to upload PDF');
          history.push('/admin/pdf_envoyee');   
          // Handle failure (e.g., show an error message)
        }
      } else {
        console.error('No PDF selected');
        // Handle the case where no PDF is selected (show an error message, for example)
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle other errors
      history.push('/admin/pdf_envoyee');
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setValue('pdf', file);
    setSelectedFileName(file ? file.name : '');
  };

  const pdfWatch = watch('pdf');

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 container mx-auto mt-10 p-8">      
    <h2 className="text-2xl font-bold mb-6">Upload Your PDF</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
          Lien WeTransfer:
        </label>
        <div className="flex items-center mb-4 border-0 rounded-lg" style={{backgroundColor:"#14939C"}}>
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
        {selectedFileName && (
          <p className="text-gray-700">
            Selected PDF: <span className="font-bold">{selectedFileName}</span>
          </p>
        )}
        {errors && (
          <small className="text-red-500">{errors.pdf.message || 'An error occurred.'}</small>
        )}

        <br />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          style={{backgroundColor:"#319000"}}
        >
          <FontAwesomeIcon icon={faUpload} className="mr-2" />
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default PdfUploadPage;
