import axios from 'axios';
import React, { useEffect, useState } from 'react'
import New_card from './New_card';
import ProductCards from './New_card';

const Homepageproducts = () => {
       const [Allprods, setAllprods] = useState<any>();

    useEffect(()=>{
        const fetchallprod =async()=>{

            try{
                    const data = await axios.post(`http://127.0.0.1:8787/api/v1/products/blogs`);

                    setAllprods(data.data.data);
                    console.log(data.data)
            }
            catch(err){
                    console.log("errror is ", err)
            }
        }
        fetchallprod();
        console.log(Allprods, "thsi is all prods from homepageproducts")
    },[]);

    if(!Allprods){
      return <div>wait</div>
    }
  return (
    <div>

        <ProductCards prods={Allprods}/>
      
    </div>
  )
}

export default Homepageproducts
