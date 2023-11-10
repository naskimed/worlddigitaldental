import React from "react";
import { Link } from "react-router-dom";
import "assets/styles/RectCard.css"

// components

export default function CardNouvelleCommande() {
  return (
<>  
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Nouvelle Commande</h6>
          </div>
        </div>
    <br></br>
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
      <div className="w-full lg:w-12/12 px-6">
        <h5 className="text-3xl font-semibold pb-4 text-center" style={{ color: "#2424242" }}>
        Pour votre « Safety Guide », vous voulez :
        </h5>
        <br></br>
        <div className="w-full">
          {/* Large Button 1 */}
          <Link to="/user/nouvelle_commande/guide_chirurgical/guide_chirurgical_pci">
            <div className="relative flex flex-col min-w-0 break-words bg-lightBlue-500 w-full mb-6 shadow-lg rounded-lg" id="NCHover">
              <a className="py-6 px-12 rounded-xl text-2xl block text-center" style={{ color: "#2424242" }}>
              Planification + conception + impression
              </a>
            </div>
          </Link>

          {/* Large Button 2 */}
          <Link to="/user/nouvelle_commande/guide_chirurgical/guide_chirurgical_pc">
            <div className="relative flex flex-col min-w-0 break-words bg-lightBlue-500 w-full mb-6 shadow-lg rounded-lg" id="NCHover">
              <a className="py-6 px-12 rounded-xl text-2xl block text-center" style={{ color: "#2424242" }}>
              Planification + conception
              </a>
            </div>
          </Link>

          {/* Large Button 3 */}
          <Link to="/user/nouvelle_commande/guide_chirurgical/guide_chirurgical_p">
          <div className="relative flex flex-col min-w-0 break-words bg-lightBlue-500 w-full mb-6 shadow-lg rounded-lg" id="NCHover">
              <a className="py-6 px-12 rounded-xl text-2xl block text-center" style={{ color: "#2424242"}}>
              Impression
              </a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</>

  );
}
