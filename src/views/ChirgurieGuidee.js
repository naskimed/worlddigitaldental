import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";


export default function ChirGuidee() {
  return (
    <>
    
    <IndexNavbar fixed />

<section className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 relative pt-16 items-center max-h-screen flex flex-col" id="index-cover" style={{ marginTop: "5rem" }} >
  <div className="container mx-auto mb-8 overflow-y-auto">
    <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg text-center" style={{backgroundColor:"#ffffffcb"}}>
      <h2 className="text-4xl font-semibold text-blueGray-900 mb-4">
        Vers la chirurgie implantaire guidée accessible à tous
      </h2>
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-blueGray-800 mb-2">
          Le système de chirurgie implantaire guidée
        </h3>
        <p className="text-blueGray-600">
          Le système de chirurgie implantaire guidée a été conçu pour faciliter l’acte chirurgical, en passant de la simulation et la planification à la pose d'implants. La chirurgie implantaire guidée permet d'optimiser le temps de traitement en préservant les volumes osseux, et en maîtrisant la précision et l’esthétique.
        </p>
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-blueGray-800 mb-2">
          L’intérêt du guide chirurgical pour la pose des implants
        </h3>
        <p className="text-blueGray-600">
          L’intérêt du guide chirurgical pour la pose des implants, même unitaire, est sans équivoque. En effet, il offre un maximum de précision et de sécurité. Une étude diagnostique permet l’élaboration d’un projet thérapeutique, pour toute réhabilitation prothétique supra-implantaire. Les guides radiologiques et chirurgicaux sont des outils qui encadrent la pratique implantaire, en aidant le praticien à poser idéalement les implants tout en respectant les impératifs esthétiques, anatomiques (volume et densité osseuse) et prothétiques d’une part, et d’éviter les structures anatomiques d’autre part.
        </p>
      </div>
    </div>
  </div>

  <div className="container mx-auto mb-12 overflow-y-auto" >
    <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg "style={{ backgroundColor:"#ffffffcb"}}>
      <h2 className="text-4xl font-semibold text-blueGray-900 mb-4 text-center">
        Le Principe de la Procédure
      </h2>
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-blueGray-800 mb-2">
          Étapes du Processus
        </h3>
        <ul className="list-decimal pl-6">
          <li className="text-blueGray-600 mb-2">
           1- Le chirurgien commande en quelques clics, en communiquant au planificateur de WDD votre commande et le dossier qui contient les fichiers 3D (STL d’empreintes et Dicom du CBCT) via WeTransfer, ainsi que toutes les informations et remarques à propos de son cas.
          </li>
          <li className="text-blueGray-600 mb-2">
           2- Le planificateur de WDD réalise alors une proposition de planification que le praticien devra valider, afin de confectionner le guide chirurgical.
          </li>
          <li className="text-blueGray-600">
           3- Impression du guide chirurgical implantaire.
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="container mx-auto mb-12 overflow-y-auto" >
  <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg" style={{ backgroundColor:"#ffffffcb", marginBottom:"5rem"}}>
      <h3 className="text-2xl font-semibold text-blueGray-800 mb-4">
      Révolution de la Chirurgie Guidée par l'Imagerie 3D en Implantologie
      </h3>
      <p className="text-blueGray-600 mb-4">
        L’étude des scans intra-oraux et des coupes radiologiques tridimensionnelles à l’aide de logiciels dans le cadre d’interventions chirurgicales implantaires guidées permet une précision supérieure de l’acte chirurgical, et offre aux praticiens une nouvelle approche dans le traitement de leurs patients.
      </p>
      <p className="text-blueGray-600 mb-4">
        Depuis quelques années, les progrès de l’imagerie 3D, du fraisage et de l’impression 3D ont rendu possible la réalisation de guides chirurgicaux beaucoup plus précis.
      </p>
      <p className="text-blueGray-600">
        L’impression 3D permet de produire rapidement du sur-mesure en se libérant des contraintes liées au procédé de fabrication. Le reste du travail concerne alors la gestion des données, la logistique de production et, bien sûr, les compétences en implantologie prothétique numérique.
      </p>
      </div>
    </div>


</section>



    
      <Footer />
    
    </>
  );
}