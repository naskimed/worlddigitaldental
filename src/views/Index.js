/*eslint-disable*/
import React,{ useState } from "react";
import { Link } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import axios from 'axios';

export default function Index() {

  const [isFormValid, setIsFormValid] = useState(true);
  const [formError, setFormError] = useState(false); // New state variable for form errors

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });  };

  const validateForm = () => {
    const {
      name,
      email,
      message,

    } = formData;
  
    const requiredFields = [
      name,
      email,
      message,
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
          history.push('/dashboard');
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
    }
    else {
      // If the form is not valid, set formError to true
      setFormError(true);
    }    
  };  


  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-1000-px" id="index-cover"
      >
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-12/12 xl:w-9/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-5xl text-blueGray-600" style={{ color: 'white', fontSize : '5.5rem' }}>
                Soyez à la pointe
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500" style={{ color: 'white', fontSize: '1.5rem' }}>
                Offrez à vos patients le meilleur de la technologie <br/>
                Optimisez la réussite de vos traitements <br/>
                Optimisez votre rendement au fauteuil <br/>
                Plusieurs médecins dentistes nous font confiance <br/>
                Éliminez les aléas thérapeutiques <br/>
                Visez l'excellence thérapeutique <br/>
              </p>
              <br/>
              <h1 className="font-light text-3xl text-blueGray-600" style={{ color: 'white' }}>
                Optez pour la technologie 3D, sécuriste et précision...
              </h1>

              <div className="mt-12">
                <a
                  href="/auth/register"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-600 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  commencez maintenant
                </a>
                <a
                  href="/auth/login"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  target="_blank"
                >
                  Se connecter   
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className=""> {/* Added mt-0 and mb-4 */}
            <img
              alt="..."
              src={require("assets/img/Safety.png")}
              className="w-full rounded-lg"
            />
          </div>

          <div className="">
            <h6 className="text-3xl mb-2 font-semibold leading-normal">
              À propos de nous
            </h6>
            <br/>
            <p className="mb-4 text-2xl text-blueGray-500 leading-100" style={{ lineHeight: '2' }}>
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
        </div>


        <div className="container mx-auto px-4 pb-32 pt-48" style={{paddingTop: "3rem", paddingBottom: "-5rem"}}>
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="" style={{width: "10rem"}}>
                  <img
                    alt="Small Image"
                    className="w-full h-full object-cover rounded-full"
                    src={require("assets/img/Aligneurs.png")}
                  />
                </div>
                <br/>
                <br></br>
                <a className="mt-6 mb-4 ml-4 font-semibold text-2xl leading-relaxed text-blueGray-500"
                href="/aligneurs"
                >
                Coming Soon
                </a>
                {/* <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        Correction discrète : pas de bagues ni de fil 
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        Durée de port courte
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        Jusqu'à 70% moins cher
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul> */}
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg "
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                  width:
                    "180srem"
                }}
                src={require("assets/img/pngegg.png")}
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap">
          <div className="w-full md:w-6/12 px-12 md:px-4">
          <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              Nos produits sont conformes aux normes internationales
            </p>
            <h2 className="font-semibold text-4xl">Sécurité, précision et rentabilité</h2>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-300">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex justify-center items-center">
                <div className="w-full lg:w-6/12 px-6">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Safety Guide
                  </h5>
                  <Link to="/chirgurie_guidee">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/f1.png")}
                      />
                    </div>
                  </Link>
                </div>

                {/* <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Masque de visage
                  </h5>
                  <Link to="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/f2.png")}
                      />
                    </div>
                  </Link>
                </div> */}

                <div className="w-full lg:w-6/12 px-6">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Aligneurs
                  </h5>
                  <Link to="/aligneurs">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/f3.png")}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blueGray-300 overflow-hidden"
      style={{background: 'linear-gradient(rgba(35,201,213), rgba(20,147,156))'}}
      >
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32 relative">
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
              Vers la chirurgie implantaire guidée accessible à tous
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-100">
              Le système de chirurgie implantaire guidée a été conçu pour faciliter l’acte chirurgical, en passant de la simulation et la planification à la pose d’implants.
              La chirurgie implantaire guidée permet d’optimiser le temps de traitement en préservant les volumes osseux, et en maîtrisant la précision et l’esthétique.

              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-100">
              L’intérêt du guide chirurgical pour la pose des implants, même unitaire, est sans équivoque. En effet, il offre un maximum de précision et de sécurité. 
              </p>
              <a
                href="/chirgurie_guidee"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Lire la suite
              </a>
            </div>

            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32 relative">
                <img
                  alt="..."
                  className="align-middle border-none max-w-full h-auto rounded-lg"
                  src={require("assets/img/guideCh.jpg")}
                />            
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
        <div className="flex flex-wrap justify-center bg-blueGray-200 shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10" 
          style={{
            backgroundImage: 'url("assets/img/guideCh.jpg")',
            backgroundSize: 'cover', 
            backgroundPosition: 'center center', 
          }}
        >
          <div className="w-full text-center lg:w-8/12">
            <h3 className="font-semibold text-3xl">
            Contactez Nous
            </h3>
            {/* <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
            Parce que si tu le fais, ça peut être le tien maintenant. Vous pouvez désormais créer un compte gratuitement
            </p> */}
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
                  <div className="contact-field mb-4">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value = {formData.name}
                      placeholder="Votre nom"
                      className="contact-input w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-lightBlue-500 focus:ring-opacity-50"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact-field mb-4">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      placeholder="Votre Email"
                      className="contact-input w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-lightBlue-500 focus:ring-opacity-50"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact-field mb-4">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      placeholder="Votre message"
                      className="contact-input w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-lightBlue-500 focus:ring-opacity-50"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <br></br>
                  {formError && (
                  <div className="text-red-500 text-s">
                      Veuillez remplir tous les champs obligatoires avant de soumettre.
                  </div>
                  )}

                  <button 
                  type="submit" 
                  className="contact-button bg-lightBlue-600 hover:bg-lightBlue-600 text-white font-bold px-6 py-4 rounded-lg mt-4 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lightBlue-500 focus:ring-opacity-50"
                  onClick={handleSubmit}
                  id="submitbutton"
                  >
                    Envoyer le message
                  </button>
            </div>
          </div>
        </div>

        </div>
      </section>
      <Footer />
    </>
  );
}
