import { Link } from "react-router-dom";


const SideBar = () => {
  return (
   <div className="flex flex-col bg-white shadow-md w-[80px] md:w-[200px] h-[100vh] sticky">

<div className="flex flex-col items-center   overflow-hidden text-gray-700  rounded ">
    <a className="flex items-center w-full px-3 mt-3" href="/">
      <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path
          d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
      </svg>
      <span className="ml-2 text-sm font-bold">The App</span>
    </a></div>


    <div className="w-full px-2">
      <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
        <a className="flex items-center w-full h-12 px-4 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
          <svg className=" w-6 md:h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="ml-2 text-sm font-medium hidden md:block">Home</span>
        </a>
        <a className="flex items-center w-full h-12 px-4 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="/dashboard">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          <span className="ml-2 text-sm font-medium hidden md:block">Add</span>
        </a>
      
        <p className="flex items-center w-full h-12 px-4 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" >
          <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="ml-2 text-sm font-medium hidden md:block" > <Link  to={"/dashboard/update"}>update</Link></span>
        </p>
              </div>


   </div>
   </div>
  )
}

export default SideBar;
