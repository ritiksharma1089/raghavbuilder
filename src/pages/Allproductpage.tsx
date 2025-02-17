import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Fileget from '../Admin_comp/Fileget';
import Selling_card2 from '../compoments2/Selling_card2';
import Update from '../Admincpmp2/Update';

const Allproductpage = () => {


    const [Allprods, setAllprods] = useState<any>();

    // const updatefunc=async(prod_id:string)=>{
    //     console.log("update call",prod_id);

    //     <Update prod_id={prod_id} />
    // }

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
