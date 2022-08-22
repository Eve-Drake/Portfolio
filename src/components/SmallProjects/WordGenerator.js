import { useState } from "react";
import axios from "axios";



const WordGenerator = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    const handleClick=()=>{
        setLoading(true);
        axios.get('https://random-words-api.vercel.app/word')
            .then(resp =>{
                setLoading(false)
                setData(resp.data);
                
            })
    }
    return ( 
        <div>
            <h3> Word Generator</h3>
            <button type="button" className="btn btn-outline-secondary" onClick={handleClick}>Generate Word</button>
            {loading && <p>Loading New Word...</p>}
            {data.map((data)=>(
                <div key={data.word}>
                <h3>{data.word} :</h3>
                <p>{data.definition}</p>
                </div>
            ))}
        </div>
     );
}
 
export default WordGenerator;