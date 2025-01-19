import React, { useState } from 'react'
import Inp_label from './inp_label';

const AddProduct = () => {

    const [proddata, setproddata]= useState({
        title :"",
        origin:"",
        price:"",
        old_price:"",
        imgpath:"",
        desc:""
    })

    const handlechange = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        console.log(e.target.value)
        setproddata((prev)=>({...prev, [e.target.name]:e.target.value}));

    };
    console.log(proddata);
    
  return (
    <div className='bg-gray-200   px-4  mx-auto w-full pt-8 text-center '>

        <fieldset className='border '>

            
       

        <legend> <h1 className='py-4 text-2xl'>New Product</h1></legend>

            <form action="" className='w-4/5  text-md md:text-xl' >
           

        <Inp_label lab_type={'text'}  lab_for={'title'} required={false} onchanglehadle={handlechange}/>
        <Inp_label lab_type={'text'}  lab_for={'origin'} required={false} onchanglehadle={handlechange}/>
        <Inp_label lab_type={'Number'}  lab_for={'price'} required={false} onchanglehadle={handlechange}/>
        <Inp_label lab_type={'number'}  lab_for={'old_price'} required={false} onchanglehadle={handlechange}/>
        <Inp_label lab_type={'text'}  lab_for={'desc'} required={false} onchanglehadle={handlechange}/>
        <Inp_label lab_type={'file'}  lab_for={'image'} required={false} onchanglehadle={handlechange}/>



        

        </form>
        </fieldset>
    </div>
  )
}

export default AddProduct