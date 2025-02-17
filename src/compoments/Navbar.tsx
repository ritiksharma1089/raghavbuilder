import { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBridgeLock } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";
import axios from "axios";

export function Navbar() {


 



  useEffect(() => {
    initFlowbite();
  }, []);


  const [Allprods, setAllprods] = useState<any>();

    const [islogin,setislogin] = useState(false);

    const logout=()=>{
      if(islogin){
        localStorage.removeItem("token");
      }
    }

    useEffect(()=>{
      const token = localStorage.getItem("token");
      if(token){
        setislogin(true)
      }
    },[])

    useEffect(()=>{
        const fetchallprod =async()=>{

            try{
                    const data = await axios.post(`http://127.0.0.1:8787/api/v1/products/blogs`);

                    console.log(data.data)
                    setAllprods(data.data.data);
            }
            catch(err){
                    console.log("errror is ", err)
            }
        }
        fetchallprod()
    },[])

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
            {islogin &&  <li>
              <Link to="/dashboard"
                
                className="block py-2 px-3 text-white font-semibold rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                aria-current="page"
              >
               Dashboard
              </Link>
            </li>}
           
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
                 

                  <div className="bg-slate-100">
        {Array.isArray(Allprods)  ? (
            
          Allprods.map((item, index) => (
            <li key={index}>
            <Link to={`/order/${item.id}`} className="block px-4 py-2 hover:bg-gray-400">
              {item.title}
            </Link>
          </li>
          ))
        ) : (
           
          <p>No data available... </p>
        )}
      
       
      </div>
                 
                </ul>
                <div className="py-1">
                  <a
                    href="/signin"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400"
                  >
                  <button onClick={()=>logout()}>{islogin ? "sign out":"sign in"}
                    </button>  
                  </a>
                </div>
              </div>
            </li>
            {/* <li>
              <Link to="/order"
                className="block py-2 px-3 text-white font-semibold rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Orders
              </Link>
            </li> */}
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

      


