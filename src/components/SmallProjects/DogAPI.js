import axios from "axios";
import { useState } from "react";

const DogAPI = () => {
    const [data, setData] = useState({})
    
    const handleClick = () =>{
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(resp => {
                setData(resp.data);
            })
    }
    
    return ( 
        <div className="dogPictures">
            <button type="button" className="btn btn-outline-secondary" onClick={handleClick}>Double Click To See A Dog</button><br></br>
            {data && <img src={data.message} alt="A Random Dog"></img>}
        </div>
     );
}
 
export default DogAPI;