import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Update from '../Admincpmp2/Update'
import axios from 'axios'

const ModifyPage = () => {
    const {prod_id} = useParams()

    const [singleprod, setsingleprod] = useState<any>();
  useEffect(()=>{

    const fetchprod = async () => {
      console.log('this is fetchprod');
      try {
        const response = await axios.get(
          `http://127.0.0.1:8787/api/v1/products/product/${prod_id}`
        );
        setsingleprod(response.data);
      } catch (err) {
        console.log({ err: err });
      }
    };
    fetchprod()
  
  },[])

  {if(!singleprod){
    return <h1>please wait</h1>
  }}
  return (

    <div className=''>
      {/* this is modugy page with {prod_id} */}
      <Update prod_id={String(prod_id)} product={singleprod}/>
    </div>
  )
}

export default ModifyPage
