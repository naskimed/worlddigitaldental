import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



export default function Login() {

  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(enteredEmail));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { email, password });

      // Assuming your server sends an error message in case of authentication failure
      if (response.data.error) {
        setError(response.data.error);
      } else {
        // Handle the successful login, e.g., show a success message, redirect, set user authentication status, etc.
        console.log('Login successful');
      }
    } catch (error) {
      // Handle network errors or other unexpected issues
      console.error('Login failed:', error.message);
      setError('La connexion a échoué. Veuillez réessayer.');
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3 ">
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
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Connectez-vous avec vos identifiants</small>
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      onChange={handleEmailChange}
                      value={email}
                      type="text" // Change to "text" for illustration purposes
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                        !isValidEmail && "border-red-500" // Add a red border for invalid email
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
                      htmlFor="grid-password"
                    >
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
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
                      Mémoriser info
                      </span>
                    </label>
                  </div>

                  <br></br>
                  <div className="text-red-500">{error}</div>
                  <br></br>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleLogin}
                      style={{
                      backgroundColor: '#14939C',
                    }}
                    >
                      Se connecter
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Mot de passe oublié?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blueGray-200">
                  <small>Créer un nouveau compte</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
