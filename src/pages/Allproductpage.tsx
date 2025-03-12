import axios from 'axios';
import { useEffect, useState } from 'react'

import Selling_card2 from '../compoments2/Selling_card2';
import { BACKEND_URL } from '../config';


const Allproductpage = () => {


    const [Allprods, setAllprods] = useState<any>();

   
    useEffect(()=>{
        const fetchallprod =async()=>{

            try{
                    const data = await axios.post(`${BACKEND_URL}/products/blogs`);

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
    <div>
      
    

      <div className="bg-white">
        {Array.isArray(Allprods)  ? (
            
          Allprods.map((item) => (
            <li key={item.id}>
              

              <Selling_card2 Product1={item} isupdate={true}/>


              
            </li>
          ))
        ) : (
           
          <p>No data available... </p>
        )}
      
       
      </div>
    </div>
  )
}

export default Allproductpage
