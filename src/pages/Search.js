import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const searchCard =(props)=>{
    return(
        <div style={{ border: '2px solid black', margin: 20 }}>
          <h3>props.people</h3>
          <h3>props.films</h3>
          <Link to={`/list/${props.listId}`}>Details</Link>

        </div>
    )
}

const Search = () => {
  const[response, setResponse] = useState("");

  const onFormSubmit = async (event) => {
        event.preventDefault();
    
        try{
            const response = await axios.get(`https://www.swapi.tech/api`)
            console.log("Got Back",response)
    
        }catch (e){
            console.log(e.message)
        }
    }


    return ( 
    <div>
        <form onSubmit={onFormSubmit}>
            <label>Search Term:</label>
            <input 
              type="text" 
              value={response} 
              onChange={event => setResponse(event.target.value)}
            />
            <button type="submit">Search</button>
        </form>


       <div>
            {response.status === "error" && "Search failed!!"}
            {response.status === "searching" && "Loading...."}
            {response.status === "done" && 
              response.data.map(data => 
                <searchCard key={data.films} listId={data.people}  />
                )       
            }
        </div>
    </div>
    );
}
export default Search;