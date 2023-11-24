import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';

function SavoirPlus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // You may want to replace the URL with your actual API endpoint
      const response = await axios.post('/dashboard', formData);

      if (response.status === 200) {
        // Handle a successful submission, e.g., show a success message, redirect, etc.
        console.log('Form submitted successfully');
        history.push('/contact');
      } 
    } catch (error) {
      // Handle errors related to the API request
      console.error('An error occurred during form submission:', error);

      // reset the form if the request failed
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } 
  };

  return (
    <>
    <IndexNavbar fixed />

        <section className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 relative pt-16 items-center max-h-screen flex flex-col" id="index-cover" style={{ marginTop: "5rem" }} >
          <div className="container mx-auto mb-8 overflow-y-auto">
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg" style={{backgroundColor:"#ffffffcb"}}>
                  <p className="text-blueGray-600">
                  Pour les guides chirurgicaux et les gouttières, les matériaux que nous utilisons sont des résines photodurcissables à base de polymère certifié USP Class VI et conçues pour la fabrication additive de pièces de qualité médicale. Elles sont transparentes, rigides et biocompatibles pour des contacts de longue durée (plus de 30 jours).
                  </p>
            </div>
            <br></br>
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg" style={{backgroundColor:"#ffffffcb"}}>
                <p className="text-blueGray-600">
                Elles peuvent être employées pour la fabrication de dispositifs médicaux et de composants d'impression 3D nécessitant une imperméabilité, une haute résistance aux chocs et une compatibilité avec la stérilisation.
                </p>
            </div>
            <br></br>
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg" style={{backgroundColor:"#ffffffcb"}}>
                <h2 className="text-xl font-semibold text-blueGray-900">
                    NB:
                </h2>
                <p className="text-blueGray-600 ">
                Les utilisateurs doivent vérifier de manière indépendante si un matériau imprimé convient à leur application particulière et à l'usage auquel il est destiné.
                </p>
            </div>
            <br></br>
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg mb-12" style={{backgroundColor:"#ffffffcb"}}>
                <h2 className="text-xl font-semibold text-blueGray-900 text-center">
                    Les matériaux que nous utilisons sont biocompatibles et certifiés.
                </h2>
            </div>
            
              <br></br>


          </div>
        </section>
        <Footer />

    </>
  );
}

export default SavoirPlus;
