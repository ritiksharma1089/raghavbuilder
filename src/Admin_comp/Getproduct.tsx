import axios from 'axios';
import  { useState } from 'react';
import Fileget from './Fileget';
import Deleteproduct from './Deleteproduct';

const Getproduct = ({prod_id}:{prod_id:string}) => {
  const [singleprod, setsingleprod] = useState<any>();

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

  return (
    <div>
      {/* Call the function inside the arrow function */}
      <button onClick={() => fetchprod()} className="text-3xl">
        click
      </button>

      {/* Display the fetched product */}
      {singleprod && (
        <pre className="mt-4">{JSON.stringify(singleprod, null, 2)}</pre>
      )}
     {/* {singleprod?.imagepath && <Fileget imagekey={singleprod.imagepath} setimage={undefined} />} */}

     {singleprod?.id && <Deleteproduct prod_id={singleprod.id}/>}


      
    </div>
  );
};

export default Getproduct;
