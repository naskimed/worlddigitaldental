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
            TABLEAU DE BORD UTILISATEUR
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (isLinkActive("/user/dashboard")
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/user/dashboard"
                >
                  <i
                    className={
                      "fas fa-user mr-2 text-sm " +
                      (isLinkActive("/user/dashboard")
                      ? "opacity-75"
                      : "text-blueGray-300")    
                    }
                  ></i>{" "}
                  Utilisateur
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (isLinkActive("/user/nouvelle_commande")
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/user/nouvelle_commande"
                >
                  <i
                    className={
                      "fas fa-shopping-cart mr-2 text-sm " +
                      (isLinkActive("/user/nouvelle_commande")
                      ? "opacity-75"
                      : "text-blueGray-300")    
                    }
                  ></i>{" "}
                  Nouvelle Commande
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (isLinkActive("/user/commandes")
                    ? "text-lightBlue-500 hover:text-lightBlue-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/user/commandes"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (isLinkActive("/user/commandes")
                      ? "opacity-75"
                      : "text-blueGray-300") 
                    }
                  ></i>{" "}
                  Vos Commandes
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (isLinkActive("/user/confirmation")
                    ? "text-lightBlue-500 hover:text-lightBlue-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/user/confirmation"
                >
                  <i
                    className={
                      "fas fa-spinner fa-pulse mr-2 text-sm " +
                      (isLinkActive("/user/confirmation")
                      ? "opacity-75"
                      : "text-blueGray-300") 
                    }
                  ></i>{" "}
                  Commandes à confirmer
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (isLinkActive("/user/termination")
                    ? "text-lightBlue-500 hover:text-lightBlue-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/user/termination"
                >
                  <i
                    className={
                      "fas fa-check-circle mr-2 text-sm " +
                      (isLinkActive("/user/termination")
                      ? "opacity-75"
                      : "text-blueGray-300") 
                    }
                  ></i>{" "}
                  Commandes Terminées
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (isLinkActive("/user/rejection")
                    ? "text-lightBlue-500 hover:text-lightBlue-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/user/rejection"
                >
                  <i
                    className={
                      "fas fa-times-circle mr-2 text-sm " +
                      (isLinkActive("/user/rejection")
                      ? "opacity-75"
                      : "text-blueGray-300") 
                    }
                  ></i>{" "}
                  Commandes Rejetées
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (isLinkActive("/user/messages")
                    ? "text-lightBlue-500 hover:text-lightBlue-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/user/messages"
                >
                  <i
                    className={
                      "fas fa-envelope mr-2 text-sm " +
                      (isLinkActive("/user/messages")
                      ? "opacity-75"
                      : "text-blueGray-300") 
                    }
                  ></i>{" "}
                  Messagerie 
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
