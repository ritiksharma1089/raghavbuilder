import axios from 'axios';
import { useEffect, useState } from 'react'

import ProductCards from './New_card';
import { BACKEND_URL } from '../config';


const Homepageproducts = () => {
       const [Allprods, setAllprods] = useState<any>();

    useEffect(()=>{
        const fetchallprod =async()=>{

            try{
                    const data = await axios.post(`${BACKEND_URL}/products/blogs`);

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
