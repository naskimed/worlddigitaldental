import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';

function Contact() {
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
    
    <div className="container mx-auto overflow-y-auto flex">
      <div className="bg-blueGray-200 bg-opacity-90 p-8 rounded-lg shadow-lg" style={{ marginBottom:"5rem"}}>
      <h6 className="text-3xl mb-2 font-semibold leading-normal">
              À propos de nous
            </h6>
            <br/>
            <p className="mb-4 text-xl text-blueGray-500 leading-100" style={{ lineHeight: '2' }}>
            WDD est upn centre de planification et d'impression 3D:
            <br/>
            WDD a pour objectif de démocratiser l'utilisation du guide chirurgical pour la pose d'implants. Pour cela, l'équipe constituée d'ingénieurs, de dentistes et de prothésistes utilise deux leviers :
            Un flux numérique rapide et intuitif.
            <br/>
              Posez vos implants à la perfection en passant à la chirurgie guidée. Safety Guide vous permet d'accéder à la chirurgie implantaire guidée : sécurité, précision et simplicité pour tous.
            <br/>
            </p>
      </div>
    </div>

    <div className="container mx-auto mb-24 overflow-y-auto" >
    <div className="w-full text-center pb-16 bg-blueGray-200 p-8 rounded-lg shadow-lg">
            <h3 className="font-semibold text-3xl">
            Contactez-nous
            </h3>
            <div className="sm:block flex flex-col mt-10">
              <a
                href="/auth/register"
                target="_blank"
                className="contact-button bg-lightBlue-600 hover:bg-lightBlue-600 text-white font-bold px-6 py-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lightBlue-500 focus:ring-opacity-50"
              >
                Commencer maintenant
              </a>
              <a
                href="/auth/login"
                target="_blank"
                className="contact-button bg-blueGray-700 hover:bg-blueGray-600 text-white font-bold px-6 py-4 rounded-lg mt-4 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blueGray-500 focus:ring-opacity-50"
                style={{margin:"0.5rem"}}
              >
                <i className="fas fa-user-lock"></i>
                <span>  Login</span>
              </a>
            </div>
            <div className="text-center mt-16">
            <form onSubmit={handleSubmit}>
              <div className="contact-field mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Votre nom"
                  onChange={handleInputChange}
                  className="contact-input w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-lightBlue-500 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="contact-field mb-4">
                <input
                  type="Email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Votre Email"
                  className="contact-input w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-lightBlue-500 focus:ring-opacity-50"
                />
              </div>
              <div className="contact-field mb-4">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  required
                  placeholder="Votre message"
                  className="contact-input w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-lightBlue-500 focus:ring-opacity-50"
                ></textarea>
              </div>
              <button 
              type="submit"
              className="contact-button bg-lightBlue-600 hover:bg-lightBlue-600 text-white font-bold px-6 py-4 rounded-lg mt-4 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lightBlue-500 focus:ring-opacity-50">
              Envoyer le message
              </button>
            </form>
            </div>
          </div>
    </div>
    </section>
    <Footer />
    </>
  );
}

export default Contact;
