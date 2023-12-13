/*eslint-disable*/
import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {

  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Update activeLink when the location changes
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const isLinkActive = (link) => {
    return activeLink === link;
  };

  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            <img
              alt="..."
              src={require("assets/img/WDD.png")}
              width={160}
            />
            
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    WDD
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
            TABLEAU DE BORD ADMIN
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (isLinkActive("/admin/users_requests")
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/users_requests"
                >
                  <i
                    className={
                      "fas fa-user mr-2 text-sm " +
                      (isLinkActive("/admin/users_requests")
                      ? "opacity-75"
                      : "text-blueGray-300")    
                    }
                  ></i>{" "}
                  Demandes des utilisateurs
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (isLinkActive("/admin/commandes")
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/commandes"
                >
                  <i
                    className={
                      "fas fa-shopping-cart mr-2 text-sm " +
                      (isLinkActive("/admin/commandes")
                      ? "opacity-75"
                      : "text-blueGray-300")    
                    }
                  ></i>{" "}
                  Les Commandes
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (isLinkActive("/admin/commandes_en_attente")
                    ? "text-lightBlue-500 hover:text-lightBlue-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/commandes_en_attente"
                >
                  <i
                    className={
                      "fas fa-spinner fa-pulse mr-2 text-sm " +
                      (isLinkActive("/admin/commandes_en_attente")
                      ? "opacity-75"
                      : "text-blueGray-300") 
                    }
                  ></i>{" "}
                  Commandes en attente
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (isLinkActive("/admin/confirmedbyyser")
                    ? "text-lightBlue-500 hover:text-lightBlue-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/confirmedbyyser"
                >
                  <i
                    className={
                      "fas fa-check-circle mr-2 text-sm " +
                      (isLinkActive("/admin/confirmedbyyser")
                      ? "opacity-75"
                      : "text-blueGray-300") 
                    }
                  ></i>{" "}
                  Commandes Acceptées
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (isLinkActive("/admin/cloturee")
                    ? "text-lightBlue-500 hover:text-lightBlue-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/cloturee"
                >
                  <i
                    className={
                      "fas fa-check mr-2 text-sm " +
                      (isLinkActive("/admin/cloturee")
                      ? "opacity-75"
                      : "text-blueGray-300") 
                    }
                  ></i>{" "}
                  Commandes Cloturer
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (isLinkActive("/admin/rejeter")
                    ? "text-lightBlue-500 hover:text-lightBlue-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/rejeter"
                >
                  <i
                    className={
                      "fas fa-times-circle mr-2 text-sm " +
                      (isLinkActive("/admin/rejeter")
                      ? "opacity-75"
                      : "text-blueGray-300") 
                    }
                  ></i>{" "}
                  Commandes Rejeter
                </Link>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
