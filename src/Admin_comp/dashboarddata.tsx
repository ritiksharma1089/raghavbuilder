import axios from 'axios';
import  { useEffect, useState } from 'react'

import { BACKEND_URL } from '../config';

const Dashboarddata = () => {

    
// Define the type for the data structure

  
  
    const [demadata, setDemadata] = useState<any | null>(null); // State for fetched data
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post(`${BACKEND_URL}/products/blogs`); // Specify expected response type
          setDemadata(response.data.data); // Set fetched data
          console.log('Fetched data:', response.data.data[0]);
  
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData(); // Call the async function
    }, []);

  
  
  return (
    <div>
      
      <div className="bg-red-600 text-yellow-200">
        {Array.isArray(demadata)  ? (
            
          demadata.map((item, index) => (
            <li key={index}>
              <strong>ID:</strong> {item.id} <br />
              <strong>Title:</strong> {item.title}
            </li>
          ))
        ) : (
           
          <p>No data available... </p>
        )}
        <p>This is demo data</p>
       
      </div>
        <h1>this is new file</h1>
      {/* <Fileget key="kjhk"/> */}
    </div>
  )
}

export default Dashboarddata
