
import { useParams } from 'react-router-dom';
import { Product1 } from '../assets/products';

import Product_disc from '../compoments2/Product_disc';
import Selling_card2 from '../compoments2/Selling_card2';
import PageBanner from '../compoments2/PageBanner';
const Order = () => {
    const {id} = useParams()


  return (
    <div >
      
      

     <PageBanner category={id}/>
      <Product_disc/>
     <Selling_card2 Product1={Product1}/>

     
   

    </div>
  )
}

export default Order
