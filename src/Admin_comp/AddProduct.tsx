import React, { useState } from 'react'
import Inp_label from './inp_label';
import NumInp_label from './Numinputlabel';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import uploadarea from "./../assets/upload_area.svg";
import { BACKEND_URL } from '../config';
const AddProduct = () => {
  const Navigate = useNavigate();
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [uploadimg, setuploadimg] = useState<any>(false);


     const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
          setSelectedFile(event.target.files[0]);
          setuploadimg(event.target.files[0])
        }

      };


    const [selectedFile, setSelectedFile] = useState<File | null>(null); // State to hold the selected file
      

      const handleFileUpload = async () => {
        if (!selectedFile) {
          alert('Please select a file first.');
          return;
        }
    
        const formData = new FormData();
        formData.append('file', selectedFile);
    
        try {
          
          const response = await axios.post(`${BACKEND_URL}/images/upload`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data', // Set multipart/form-data
            },
          });
          setproddata( (prev)=> ({...prev, image:response.data.key}));
          console.log(setproddata);
          setAllowSubmit(true);
          alert("image uploaded successfully")
        } catch (error) {
          console.error('Error uploading file:', error);
          
        }
      };

    const formSubmitHandle = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form reload



        console.log("sucmt call")
      
        const body = proddata;
        console.log(body);

        if(!body.image || body.image==""){
          alert("add image first");
          return 
        }
       
      
        try {

          const token = localStorage.getItem("token");
          const response = await axios.post(`${BACKEND_URL}/products/new`, body, {
            headers: {
              Authorization: token, // Replace with actual token
              'Content-Type': 'application/json',
            },
          });
      
          console.log('Response: this is response id ', response.data);
          alert("data added to backend");
          Navigate("/")
          // Navigate('/dashboard');

        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };


   
    const [proddata, setproddata]= useState({
        title :"",
        origin:"",
        price:"",
        old_price:"",
        image:"",
        desc:"",
        size:"",
        color:"",
        content:""
    })

    const handlechange = (e: any)=>{
        console.log(e.target.value)
        setproddata((prev)=>({...prev, [e.target.name]:e.target.value}));

    };
    console.log(proddata);
    
  return (
    <div className='bg-slate-50  p-4  mx-auto w-full pt-8 text-center md:w-4/5 '>

        <fieldset className='border '>

            
       

        <legend> <h1 className='py-4 text-2xl'>New Product</h1></legend>

            <form onSubmit={formSubmitHandle} className='w-4/5  text-md md:text-xl mx-auto' >
           

        <Inp_label lab_type={'text'}  lab_for={'title'} required={true} onchanglehadle={handlechange}/>
        <Inp_label lab_type={'text'}  lab_for={'origin'} required={false} onchanglehadle={handlechange}/>
        

        <NumInp_label lab_type='number' lab_for='price' required={false} onchanglehadle={handlechange} />
        
        <Inp_label lab_type={'text'}  lab_for={'desc'} required={false} onchanglehadle={handlechange}/>

        <Inp_label lab_type={'text'}  lab_for={'size'} required={false} onchanglehadle={handlechange}/>
        <Inp_label lab_type={'text'}  lab_for={'color'} required={false} onchanglehadle={handlechange}/>
        <Inp_label lab_type={'text'}  lab_for={'content'} required={false} onchanglehadle={handlechange}/>





      <label htmlFor="file-input">
            <img src={uploadimg?URL.createObjectURL(uploadimg) :uploadarea} alt=""  className='addproduct-thumbnail-img'/>
        </label>
        
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white my-5 py-2 px-4 border border-blue-500 hover:border-transparent rounded " >Upload</button>

      <br/>



       <button type='submit' disabled={!allowSubmit} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ">submit</button> 

        </form>
        </fieldset>
    </div>
  )
}
// 31c769de-53c1-4e00-96ad-1536f7d55ef3
export default AddProduct