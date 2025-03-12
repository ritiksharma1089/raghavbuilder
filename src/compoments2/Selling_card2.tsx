
import { useState } from "react";
import Fileget from "../Admin_comp/Fileget";

import { useNavigate } from "react-router-dom";
// import { Product1 } from "../assets/products";

type sellingcardtype ={
  Product1 :any,
  isupdate:boolean,
  
}
const Selling_card2 = ({Product1, isupdate}:sellingcardtype) => {
  const Navigate = useNavigate()

  const [imagesrc, setimagesrc] = useState<string>();
  return (

   

    <div className='w-flul  md:w-4/5  bg-white border border-gray-200 rounded-lg shadow flex  flex-col items-center  justify-around mx-auto h-fit '>
      

      <div className=" md:text-2xl text-black font-semibold"> {Product1.title.toUpperCase()}</div>


      <div className="px-5  py-5">
       {Product1.content}
      </div>

        <div  className="text-center">
                {Product1.imagepath? <Fileget imagekey={Product1.imagepath} setimage={setimagesrc}/> : <h1 > no image for this</h1>}  

            <img src={imagesrc} alt="pic3" className=" border-rose-300 rounded-md shadow-lg" />

            <div className=" md:text-2xl text-black font-semibold"> {Product1.title.toUpperCase()}</div>

           

        </div>
        <div className="pt-5">

        
<div className="px-5">



<table className="table-fixed">
  <thead>
    <tr>
      <th>Properties...........     </th>
      <th>Value</th>
     
    </tr>
  </thead>
  <tbody>

 
      {Object.entries(Product1)
        .filter(([key, value]) => value !== undefined && value !== null && value!==""  && key!="imagepath" && key!="price" && key!="content" &&key!="id").slice(0,3)
        .map(([key, value])=> (


          <tr key={key}>
          <td className=" text-black font-semibold pt-2">{key.toUpperCase()}</td>
          <td className="pt-2">{String(value)} </td>
          
         
        </tr>
        
        ))}

        


        {Object.entries(Product1)
        .filter(([key, value]) => value !== undefined && value !== null && value!==""  && key!="imagepath" && key!="price" && key!="content" && key!="authorId" &&key!="id"  && key!="desc").slice(3)
        .map(([key, value])=> (


          <tr key={key}>
          <td className="  text-black font-semibold">{key.toUpperCase()}</td>
          <td>{String(value)}</td>
         
        </tr>
 ))}

   
   
  </tbody>
</table>

        
        
        </div>



        </div>
        <div className=" py-4  flex gap-4 " >


        <div className="text-xl md:text-2xl text-black font-semibold "> {Product1.title.toUpperCase()}</div>  
            <p className="md:text-xl font-semibold "> Price : {Product1.price}</p>
            {isupdate && <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => {Navigate(`modify/${Product1.id}`)}}>update</button>}
           

           

        </div>

        {/* <div className="px-5  py-5">
       {Product1.desc}
      </div> */}

<div className="flex gap-5 text-red-400">
    <a href="tel:+919255424191" className="flex">
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            fill="currentColor" 
            viewBox="0 0 16 16" 
            style={{ marginRight: '8px' }}
        >
            <path d="M3.654 1.328a.678.678 0 0 1 .868-.272l2.523 1.07c.24.1.407.302.461.54l.547 2.188c.054.236-.004.49-.16.656L6.165 6.879a11.451 11.451 0 0 0 4.21 4.21l1.368-1.368c.166-.166.42-.214.656-.16l2.188.547c.239.054.441.22.54.461l1.07 2.523a.678.678 0 0 1-.272.868l-2.462 1.64c-.375.25-.86.287-1.29.105a15.354 15.354 0 0 1-7.555-7.555c-.182-.43-.145-.915.105-1.29l1.64-2.462z"/>
        </svg>
        +(91)9255424191
    </a>
    <a href="tel:+919812972135" className="flex">
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            fill="currentColor" 
            viewBox="0 0 16 16" 
            style={{ marginRight: '8px' }}
        >
            <path d="M3.654 1.328a.678.678 0 0 1 .868-.272l2.523 1.07c.24.1.407.302.461.54l.547 2.188c.054.236-.004.49-.16.656L6.165 6.879a11.451 11.451 0 0 0 4.21 4.21l1.368-1.368c.166-.166.42-.214.656-.16l2.188.547c.239.054.441.22.54.461l1.07 2.523a.678.678 0 0 1-.272.868l-2.462 1.64c-.375.25-.86.287-1.29.105a15.354 15.354 0 0 1-7.555-7.555c-.182-.43-.145-.915.105-1.29l1.64-2.462z"/>
        </svg>
        +(91) 9812972135
    </a>
</div>


    </div>

  
  )
}

export default Selling_card2
