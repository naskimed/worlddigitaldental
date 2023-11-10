import React from 'react';
import { Link } from "react-router-dom";
import MessageComponent from 'components/Cards/RectMessageCard';

export default function Dashboard() {
  return (
    <div className="dashboard-page">
        <MessageComponent />
        <br></br>
        <br></br>
        <section className="block relative z-1 bg-blueGray-300">
        <div className="">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-3/12 px-1"> {/* Adjust column width */}
              <div className="flex justify-center items-center">
                <div className="w-full lg:w-12/12 px-6"> {/* Adjust column width */}
                  <h5 className="text-2xl font-semibold pb-4 text-center"> {/* Increase font size */}
                  Guide chirurgical
                  </h5>
                  <Link to="/admin/nouvelle_commande/guide_chirurgical">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg" 
                        src={require("assets/img/f1.png")}  // Adjust image size if needed
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-3/12 px-1"> {/* Adjust column width */}
              <div className="w-full lg:w-11/12 px-6"> {/* Adjust column width */}
                <h5 className="text-2xl font-semibold pb-4 text-center"> {/* Increase font size */}
                Aligneurs
                </h5>
                <Link to="/admin/nouvelle_commande/aligneurs">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg" 
                      src={require("assets/img/f2.png")}  // Adjust image size if needed
                    />
                  </div>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-3/12 px-1"> {/* Adjust column width */}
              <div className="w-full lg:w-11/12 px-6"> {/* Adjust column width */}
                <h5 className="text-2xl font-semibold pb-4 text-center"> {/* Increase font size */}
                Goutieres
                </h5>
                <Link to="/admin/nouvelle_commande/goutieres">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg" 
                      src={require("assets/img/f3.png")}  // Adjust image size if needed
                    />
                  </div>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-3/12 px-1"> {/* Adjust column width */}
              <div className="w-full lg:w-11/12 px-6"> {/* Adjust column width */}
                <h5 className="text-2xl font-semibold pb-4 text-center"> {/* Increase font size */}
                Modeles Dentaires
                </h5>
                <Link to="/admin/nouvelle_commande/modeles_dentaires">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg" 
                      src={require("assets/img/f3.png")}  // Adjust image size if needed
                    />
                  </div>
                </Link>
              </div>
            </div>

  
          </div>
        </div>
      </section>
      <br></br>
      <br></br>

      </div>

  );
}

