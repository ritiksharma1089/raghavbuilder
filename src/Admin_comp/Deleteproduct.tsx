import axios from 'axios'

import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';

const Deleteproduct = ({prod_id}:{prod_id:string}) => {
    const Navigate = useNavigate()

    const Deleteprod = async()=>{

        const name = prompt("What's your name?");
        if (name==="anirudh") {
            // Respond with a message
            alert("Hello, " + name + "!");

            try{

                const token = localStorage.getItem("token");
                const isdone:any = await axios.delete(`${BACKEND_URL}/products/delete/${prod_id}`, {
                    headers: {
                      Authorization: token, // Replace with actual token
                      'Content-Type': 'application/json',
                    },}
                );
    
                console.log(isdone)
    
                if (isdone?.success === true) {
                    console.log("Product deleted");
                    Navigate("/dashboard")
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
