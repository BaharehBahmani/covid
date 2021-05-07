import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Details = () => {
    const [fullList, setFullList] = useState(null);
    const params = useParams()
  
    console.log("My router params in this page", params)
  
    useEffect(() => {
  
      const fetchList = async () => {
        try {
          const response = await axios.get(`https://www.swapi.tech/api`);
          console.log(response.data)
          setFullList(response.data);
        } catch(e) {
          console.log(e);
        }
      }
      fetchList();
    }, [])
  
    if (!fullList) {
      return (
        <div>
          Loading....
        </div>
      )
    }
  
    return (
      <div>
        <h2>{fullList.people}</h2>
        
        <p>{fullList.films}</p>
      </div>
    );
  }
   
  export default Details;