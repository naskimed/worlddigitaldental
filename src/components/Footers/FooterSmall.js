import React from "react";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-blueGray-800"
            : "relative") + " pb-6"
        }
        style={{
            backgroundColor: '#14939C',
        }}
      >
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-blueGray-600" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-800 font-semibold py-1 text-center md:text-left">
                Copyright ©    
                <a
                  href="https://www.creative-tim.com?ref=nr-footer-small"
                  className="text-white hover:text-blueGray-300 text-sm font-semibold py-1"
                >
                   2023 Nas
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="https://www.creative-tim.com?ref=nr-footer-small"
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    Contactez-nous
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=nr-footer-small"
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    A propos nous
                  </a>
                </li>
                <li>
                  <a
                    href="http://blog.creative-tim.com?ref=nr-footer-small"
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    Tel : +216 70 80 90 00
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
