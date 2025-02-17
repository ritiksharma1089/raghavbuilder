import React, { useEffect, useState } from 'react'
import Inp_label from '../Admin_comp/inp_label'

import axios from 'axios';
import Deleteproduct from '../Admin_comp/Deleteproduct';
import { useNavigate } from 'react-router-dom';

const Update = ({prod_id,product}:{prod_id:string, product:any}) => {

const Navigate = useNavigate()
 

  const formSubmitHandle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form reload


    

    
  
    const body = proddata;
    console.log(body);


    const name = prompt("What's your name?");

    if (name==="anirudh") {
        // Respond with a message
        alert("Hello, " + name + "!");


        try {

      const token = localStorage.getItem("token")
          const response = await axios.put('http://127.0.0.1:8787/api/v1/products/update', body, {
            headers: {
              Authorization: token, // Replace with actual token
              'Content-Type': 'application/json',
            },
          });
      
          console.log('Response:', response.data);
          console.log("update done");
    
          Navigate("/dashboard/update")
    
        } catch (error) {
          console.error('Error submitting form:', error);
        }
    } else {
        alert("Permission denied.");
    }
   
  
    
  };





   const [proddata, setproddata]= useState({
          id:prod_id,
          title :product.title,
          origin:product.origin,
          price:product.price,
          old_price:"",
          image:product.imagepath,
          desc:product.desc,
          size:product.size,
          content:product.content
      })
  
      const handlechange = (e: any)=>{
          console.log(e.target.value)
          setproddata((prev)=>({...prev, [e.target.name]:e.target.value}));
  
          console.log(proddata);
      };

     
  return(
    <div className='bg-white   px-4  mx-auto w-full pt-8 text-center '>

      UPDATE YOUR PRODUCT HERE
        <fieldset className='border '>

            
       

        <legend> <h1 className='py-4 text-2xl w-fit'>Edit Product</h1></legend>

            <form onSubmit={formSubmitHandle} className='w-4/5  text-md md:text-xl mx-auto' >
           

        <Inp_label lab_type={'text'}  lab_for={'title'} required={true} onchanglehadle={handlechange} valueprop ={product.title} />
        <Inp_label lab_type={'text'}  lab_for={'origin'} required={true} onchanglehadle={handlechange} valueprop={product.origin }/>
        

        <Inp_label lab_type='number' lab_for='price' required={true} onchanglehadle={handlechange} valueprop={product.price} />
        
        <Inp_label lab_type={'text'}  lab_for={'desc'} required={true} onchanglehadle={handlechange} valueprop={product.desc} />

        <Inp_label lab_type={'text'}  lab_for={'size'} required={true} onchanglehadle={handlechange} valueprop={product.size}/>
        <Inp_label lab_type={'text'}  lab_for={'content'} required={true} onchanglehadle={handlechange} valueprop={product.content}/>
        


       

      <br/>



        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>submit</button>

        </form>
        </fieldset>

        <Deleteproduct prod_id={prod_id}/>
    </div>
  )
}

export default Update
