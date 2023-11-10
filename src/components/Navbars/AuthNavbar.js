/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// components

import PagesDropdown from "components/Dropdowns/PagesDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
            <img
              alt="..."
              src={require("assets/img/logowdd.png")}
              width={120}
            />
            </Link>
            <button
           
               className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
               type="button"
               onClick={() => setNavbarOpen(!navbarOpen)}
             >
               <i className="fas fa-bars"></i>
             </button>
           </div>
           <div
             className={
               "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
               (navbarOpen ? " block" : " hidden")
             }
             id="example-navbar-warning" 
           >
             <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
               <li className="flex items-center">
               </li>
               <li className="flex items-center">
                 <a
                   className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                   href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F"
                   target="_blank"
                 >
                   <i className="text-white fab fa-facebook text-lg leading-lg " />
                   <span className="lg:hidden inline-block ml-2">Share</span>
                 </a>
               </li>
           
               <li className="flex items-center">
                 <a
                   className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                   href="https://api.whatsapp.com/send?phone=YOUR_WHATSAPP_NUMBER"
                   target="_blank"
                 >
                   <i className="text-white fab fa-whatsapp text-lg leading-lg" />
                   <span className="lg:hidden inline-block ml-2">WhatsApp</span>
                 </a>
               </li>
           
               <li className="flex items-center">
                 <a
                   className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                   href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/"
                   target="_blank"
                 >
                   <i className="text-white fab fa-instagram text-lg leading-lg" />
                   <span className="lg:hidden inline-block ml-2">Instagram</span>
                 </a>
               </li>
           
           
           
               <li className="flex items-center ">
                 <button
                   className="bg-lightBlue-900 text-white active:bg-lightBlue-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                   type="button"
                 >
                   <i className="fas fa-user-lock"></i> Accès Profissional
                 </button>
               </li>
             </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
