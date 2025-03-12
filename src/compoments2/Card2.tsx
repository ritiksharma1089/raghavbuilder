
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_URL } from '../config';

const Card2 = ({product}:any) => {


 const [myimage, setMyImage] = useState<string | null>(null); // State for 
  useEffect(() => {
    const fetchFile = async () => {
      try {
        // Fetch the image as a blob
        const response = await axios.get(`${BACKEND_URL}/images/file/${product.imgsrc}`, {
          responseType: 'blob', // Specify the response type as Blob
        });

        console.log('Fetched image Blob:', response.data);

        // Create a URL for the Blob
        const url = URL.createObjectURL(response.data);

        // Update the state with the created URL
        setMyImage(url);
     
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchFile();

    // Cleanup the created URL when the component unmounts
    return () => {
      if (myimage) {
        URL.revokeObjectURL(myimage);
      }
    };
  }, []); // Empty dependency array to run effect only once






  
  return (
    <div>
      

      <div key={product.id} className={`flex-shrink-0 m-6 relative overflow-hidden  ${product.bgColor} rounded-lg max-w-xs shadow-lg group`}  style={{ backgroundColor: `${product.bgColor}` }} >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <Link to={`/order/${product.id}`}>
          <div className="relative pt-5 px-5 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: 'radial-gradient(black, transparent 60%)',
                transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                opacity: 0.2,
              }}
            ></div>
            <img className="relative w-55" src={myimage ||""} alt={product.name} />
          </div>
          <div className="relative text-black px-6 pb-6 mt-6">
          
            <div className="flex justify-between">
              <span className="block font-semibold text-xl uppercase">{product.name}</span>
              <span className={`block bg-white rounded-full  text-xs font-bold px-3 py-2 leading-none  items-center`}>
                Buy Now
              </span>
            </div>

      

          </div>
          </Link>
        </div>
    </div>
  )
}

export default Card2
