import React,{ useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import axios from "axios";

export default function Register() {

    const [formData, setFormData] = useState({
      nom: "",
      prenom: "",
      sexe: "M",
      occupation: "Dentiste",
      email: "",
      telFixe: "",
      mobile: "",
      adresse: "",
      ville: "",
      pays: "",
      matricule: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
  
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
  
    const handleEmailChange = (e) => {
      const enteredEmail = e.target.value;
      setEmail(enteredEmail);
  
      // Regular expression for a simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValidEmail(emailRegex.test(enteredEmail));
    };
  
  
    const handleChange = (e) => {
      if (e.target.type === "radio") {
        // For radio buttons, set the value directly
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      } else {
        // For other input types, use the name and value attributes
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      }
    };
  
    const handleSubmit = async () => {
      try {
        // Check if username or email already exists
        const checkDuplicate = await axios.post(
          "/api/check-duplicate",
          // Send the fields that need to be checked (e.g., username, email)
          { username: formData.username, email: formData.email }
        );
  
        if (checkDuplicate.data.error) {
          setError(checkDuplicate.data.error);
          setSuccessMessage("");
        } else {
          // If no duplicates, proceed with registration
          const response = await axios.post("/api/register", formData);
  
          if (response.data.success) {
            setError("");
            setSuccessMessage("Registration successful!");
            // You can redirect the user or perform other actions upon successful registration
          }
        }
      } catch (error) {
        console.error("Registration failed", error);
        setError("Registration failed. Please try again.");
        setSuccessMessage("");
      }
    };
  

  return (
    <>
<div className="container mx-auto px-4 h-full">
  <div className="flex content-center items-center justify-center h-full">
    <div className="w-full lg:w-12/12 px-8">
      <div className="relative grid grid-cols-2 gap-4 min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
        <div className="rounded-t mb-0 px-6 py-6 col-span-2">
          <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Connectez-vous à
                  </h6>
                </div>
                <img 
                src={require("assets/img/WDD.png")} width={200} 
                className="mx-auto h-16 w-auto"
                />

                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Créer un nouveau compte</small>
                </div>

              
              <div className="flex flex-wrap">


                {/* Left Group */}
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">                
                <form>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="nom"
                      >
                        Nom :
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Nom"
                      />
                    </div>

                    <div className="relative mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="prenom"
                      >
                        Prénom :
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Prénom"
                      />
                    </div>

                    {/* Sexe Radio Buttons */}
                    <div className="relative mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="sexe"
                      >
                        Sexe :
                      </label>
                      <div>
                        <label htmlFor="sexe-m" className="mr-2">
                          Homme
                          <input
                            type="radio"
                            id="sexe-m"
                            name="sexe"
                            value="M"
                            checked={formData.sexe === "M"}
                            onChange={handleChange}
                          />
                        </label>
                        <label htmlFor="sexe-f">
                          Femme
                          <input
                            type="radio"
                            id="sexe-f"
                            name="sexe"
                            value="F"
                            checked={formData.sexe === "F"}
                            onChange={handleChange}
                          />
                        </label>
                      </div>
                    </div>

                    {/* Occupation Select */}
                    <div className="relative mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="occupation"
                      >
                        Vous êtes :
                      </label>
                      <select
                        id="occupation"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="Dentiste">Dentiste</option>
                        <option value="Orthodontiste">Orthodontiste</option>
                        <option value="Prothésiste"> Prothésiste </option>
                      </select>
                    </div>


                  </div>

                  
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email :
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={email}  
                      onChange={handleEmailChange}
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        !isValidEmail && "border-red-500" 
                      }`}
                      placeholder="Email"
                    />
                  {!isValidEmail && (
                  <p className="text-red-500 text-xs mt-1">Invalid email format</p>
                  )}
                  </div>


                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="tel-fixe"
                    >
                      Numéro de téléphone fixe :
                    </label>
                    <input
                      type="tel"
                      id="tel-fixe"
                      name="tel-fixe"
                      pattern="[0-9]{10}"  // Restriction: 10 digits
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Numéro de téléphone fixe"
                    />
                    <small className="text-red-500">
                    Format : 8 chiffres (exp, 70 00 00 00)
                    </small>
                  </div>
                
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="mobile"
                    >
                      Mobile :
                    </label>
                    <PhoneInput
                      country={"eg"}
                      enableSearch={true}
                      value={"+216"}
                      // onChange={(phone) => setPhone(phone)}
                    />
                  </div>
            
                  </form>
                </div>  
                




                  {/* Right Group */}
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="adresse"
                    >
                      Adresse:
                    </label>
                    <input
                      type="text"
                      id="adresse"
                      name="adresse"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Adresse du cabinet"
                    />
                  </div>
                
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="ville"
                    >
                      Ville :
                    </label>
                    <input
                      type="text"
                      id="ville"
                      name="ville"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Ville"
                    />
                  </div>
                
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="pays"
                    >
                      Pays :
                    </label>
                    <input
                      type="text"
                      id="pays"
                      name="pays"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Pays"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="matricule"
                    >
                      Matricule fiscal ou registre d’entreprise :
                    </label>
                    <input
                      type="text"
                      id="matricule"
                      name="matricule"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="……./. /. /000"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="username"
                    >
                      Nom d’utilisateur :
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Nom d’utilisateur"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="password"
                    >
                      Mot de passe :
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Mot de passe"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="confirm-password"
                    >
                      Confirmation du mot de passe :
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      name="confirm-password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Confirmation du mot de passe"
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                      Je suis d'accord avec le{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Politique de confidentialité
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      style={{
                        backgroundColor: '#14939C',
                      }}
                    >
                      Créer un compte
                    </button>
                  </div>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
