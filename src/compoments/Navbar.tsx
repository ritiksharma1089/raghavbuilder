import { useEffect } from "react";
import { initFlowbite } from "flowbite";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBridgeLock } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";

export function Navbar() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <nav className="border-gray-200 bg-gray-400 sticky top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faBridgeLock} style={{ height: "30px", color:"black" }} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Raghav Builders
          </span>
        </a>

        
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-gray-400 bg-gray-400 border-gray-300">
            <li>
              <Link to="/"
                
                className="block py-2 px-3 text-white font-semibold rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="block py-2 px-3 text-white font-semibold rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Products
                
                
              </button>

              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal rounded-lg shadow w-44 bg-gray-100 divide-y divide-gray-100"
              >
                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownNavbarLink">
                  <li>
                    <Link to="/order/Rodi" className="block px-4 py-2 hover:bg-gray-400">
                      Aggregate
                    </Link>
                  </li>
                  <li>
                    <Link to="/order/Bricks" className="block px-4 py-2 hover:bg-gray-400">
                      Bricks
                    </Link>
                  </li>
                  <li>
                  <Link to="/order/Sand" className="block px-4 py-2 hover:bg-gray-400">
                      Sand
                    </Link>
                  </li>
                  <li>
                  <Link to="/order/Dust" className="block px-4 py-2 hover:bg-gray-400">
                      Dust
                    </Link>
                  </li>
                  <li>
                  <Link to="/order/Cement" className="block px-4 py-2 hover:bg-gray-400">
                      Cement
                    </Link>
                  </li>
                  <li>
                  <Link to="/order/steel" className="block px-4 py-2 hover:bg-gray-400">
                      Steel / TMT Bars
                    </Link>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>
            <li>
              <Link to="/order"
                className="block py-2 px-3 text-white font-semibold rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Orders
              </Link>
            </li>
            <li>
             <Link to="/About"
                className="block py-2 px-3 text-white font-semibold rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                About us
              </Link>
            </li>
            <li>
              <Link to="/Contacts"
                className="block py-2 px-3 text-white font-semibold rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

      


