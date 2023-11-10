import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import 'assets/styles/RectCard.css'


export default function ChirGuidee() {
  return (
    <>
    
    <IndexNavbar fixed />

    <section className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 relative pt-16 items-center max-h-screen flex flex-col" id="index-cover" style={{ marginTop: "5rem" }} >
      <div className="container mx-auto mb-8 overflow-y-auto">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg" style={{backgroundColor:"#ffffffcb"}}>
            <h2 className="text-4xl font-semibold text-blueGray-900 mb-4 text-center">
                La Sécurité avant tout</h2>
              <p className="text-blueGray-600 mb-4">
                Accédez à la chirurgie implantaire guidée et sécurisez vos poses d’implants avec Safety Guide : le guide chirurgical conçu à l’aide des dernières technologies 3D. Passez votre commande en ligne en remplissant le formulaire, afin de sécuriser la pose d’un implant durable.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Votre commande en ligne en quelques étapes</h3>
              <ul className="list-disc pl-6 mb-4">
                <li className="text-blueGray-600">1- Uploadez vos fichiers Dicom du CBCT ou Denta Scan sur WeTransfer, trouvés dans le CD Dicom du radiologue</li>
                <li className="text-blueGray-600">2- Chargez vos fichiers STL de votre empreinte optique sur WeTransfer, à défaut envoyez-nous par rapid poste vos empreintes physiques en silicones, ou vos modèles en plâtre dur issus d’empreintes en silicones.</li>
              </ul>
              <p className="text-blueGray-600 mb-4">
                Votre proposition de planification sera disponible au bout de 4 jours ouvrables. Elle dépend de vos directives et de vos remarques, que vous avez fournies lors de la commande et aussi de notre lecture du CBCT et de l’éventuel projet prothétique numérique, ainsi que le modèle(s) d’implant(s) que vous avez choisi de poser, avec le(s) quel(s) sera réalisée la planification.
              </p>
              <p className="text-blueGray-600 mb-4">
                Vous devrez valider la planification commandée ou nous la rectifierons ensemble, via Teamviewer, jusqu’à validation. Si la planification implantaire vous convient, vous la validez, afin de concevoir et fabriquer le guide.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Votre Safety Guide sera :</h3>
              <ul className="list-disc pl-6">
                <li className="text-blueGray-600">Emballé, Stérile ou non selon votre commande</li>
                <li className="text-blueGray-600">En Matériaux biocompatibles et certifiés</li>
                <li className="text-blueGray-600">Avec son rapport chirurgical ainsi que le protocole de forage</li>
              </ul>
            </div>

          <br></br>

    <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center" style={{backgroundColor:"#ffffffcb"}}>
      <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Safety Guide® est :</h2>
          <ul className="list-disc pl-6">
            <li className="text-blueGray-600 mb-2">✅ Adapté à la marque d’implant choisi de poser</li>
            <li className="text-blueGray-600 mb-2">✅ Accessible en quelques clics</li>
            <li className="text-blueGray-600 mb-2">✅ En guidage pilote « Safety Guide Pilote » ou en full guided « Safety Guide Full »</li>
            <li className="text-blueGray-600 mb-2">✅ À appui dentaire (édentés partiels) et muqueux ou osseux (édentés complets)</li>
            <li className="text-blueGray-600 mb-2">✅ Conçus et produits en Tunisie TN</li>
          </ul>
        </div>
    </div>
      
      <br></br>

      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center" style={{backgroundColor:"#ffffffcb", marginBottom:"5rem"}}>
        <div className="w-full md:w-1/2">
         <h2 className="text-2xl font-semibold text-gray-800 mb-4">
           NOTRE ÉQUIPE SUPPORT VOUS ACCOMPAGNE DANS LA RÉALISATION DE VOTRE PROJET IMPLANTAIRE
         </h2>
         <ul className="list-decimal pl-6 text-blueGray-600">
           <li className="mb-2">1- Collecte de données des patients (empreinte optique, fichier Dicom du CBCT)</li>
           <li className="mb-2">2- Commande + Transfert de vos fichiers</li>
           <li className="mb-2">3- Conception : simulation et planification du projet implantaire</li>
           <li className="mb-2">4- Validation</li>
           <li className="mb-2">5- Fabrication du guide chirurgical</li>
           <li className="mb-2">6- Réception de votre Safety Guide® et Réalisation de la chirurgie en toute sécurité</li>
         </ul>
        </div>
        <div className="w-full md:w-1/2 rounded-lg mb-4">
         <img
           id="imageSafetyGuide"
           alt="Safety Guide"
           src={require("assets/img/Safety.png")}
           className="rounded-lg mb-4" // Adjust the size of the image here
         />
        </div>
    </div>

      </div>
    </section>
    <Footer />
    
    </>
  );
}
