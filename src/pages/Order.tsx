
import { useParams } from 'react-router-dom';

import PageBanner from '../compoments2/PageBanner';
import { useEffect, useState } from 'react';

import axios from 'axios';
import Selling_card2 from '../compoments2/Selling_card2';
import { BACKEND_URL } from '../config';
const Order = () => {
    const {id} = useParams();

    const [prod,setprod]=useState<any>();


    useEffect(()=>{


      const fetchprod = async () => {
        console.log('this is fetchprod');
        try {
          const response = await axios.get(
            `${BACKEND_URL}/products/product/${id}`
          );
          setprod(response.data);
        } catch (err) {
          console.log({ err: err });
        }
      };

      fetchprod()
    },[id]);

    if(!prod){
      return <h1> loading</h1>
    }


  return (
    <div >
      
      

     <PageBanner category={prod.title}/>
     <Selling_card2 Product1={prod} isupdate={false}/>
      {/* <Product_disc product1={prod}/> */}
     

     
   

    </div>
  )
}

export default Order
