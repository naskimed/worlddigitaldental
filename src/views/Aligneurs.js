import React, { useEffect, useState } from 'react';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

const Aligneurs = () => {
  return (
    <>
    <IndexNavbar fixed />
    <section className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 relative pt-16 items-center flex flex-col h-screen max-h-1000-px" id="index-cover">
      <div className="container max-w-xs text-center " style={{marginTop:"15rem"}}>
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg " style={{backgroundColor:"#ffffffcb", }}>
        <h2 className="text-5xl font-semibold text-blueGray-800 mb-4">
          Coming Soon
        </h2>
        <p className="text-2xl text-blueGray-800 mb-8">
        Notre site internet est en construction.
        </p>
        <p className="text-blueGray-800">
        Nous lançons bientôt ! Restez à l'écoute pour des mises à jour passionnantes.
        </p>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Aligneurs;