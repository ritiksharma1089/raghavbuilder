import axios from 'axios';
import  { useEffect, useState } from 'react';
import { BACKEND_URL } from '../config';

type filegettype ={
  imagekey:string,
  setimage:any
}

const Fileget = ({imagekey,setimage}:filegettype,) => {
  const [myimage, setMyImage] = useState<string | null>(null); // State for image URL

  useEffect(() => {
    const fetchFile = async () => {
      try {
        // Fetch the image as a blob
        const response = await axios.get(`${BACKEND_URL}/images/file/${imagekey}`, {
          responseType: 'blob', // Specify the response type as Blob
        });

        console.log('Fetched image Blob:', response.data);

        // Create a URL for the Blob
        const url = URL.createObjectURL(response.data);

        // Update the state with the created URL
        setMyImage(url);
        setimage(url)
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
  }, [imagekey]); // Empty dependency array to run effect only once

  return (
    <div>
      <div>

   <h1 className='underline'>PICTURE</h1> 
        {/* {myimage ? (
          // Display the image using the Blob URL
          <img
            src={myimage}
            alt="Fetched from server"
            style={{ maxWidth: '50%', height: 'auto' }}
          />
        ) : (
          <p>Loading image...</p>
        )} */}
      </div>
    </div>
  );
};

export default Fileget;
