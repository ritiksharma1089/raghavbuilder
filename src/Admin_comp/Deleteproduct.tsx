import axios from 'axios'
import React from 'react'

const Deleteproduct = ({prod_id}:{prod_id:string}) => {

    const Deleteprod = async()=>{

        const name = prompt("What's your name?");
        if (name==="anirudh") {
            // Respond with a message
            alert("Hello, " + name + "!");

            try{

                const token = localStorage.getItem("token");
                const isdone:any = await axios.delete(`http://127.0.0.1:8787/api/v1/products/delete/${prod_id}`, {
                    headers: {
                      Authorization: token, // Replace with actual token
                      'Content-Type': 'application/json',
                    },}
                );
    
                console.log(isdone)
    
                if(isdone?.sucess ==true){
                    console.log("product dleted ")
                }
                else{
                    console.log("error in delete product")
                }
            }
            catch(err){
                console.log({err:err})
            }
        } else {
            alert("Permission denied.");
        }
      
       
    }
  return (
    <div>


        <button onClick={Deleteprod} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full my-5'>delete</button>
      
    </div>
  )
}

export default Deleteproduct
