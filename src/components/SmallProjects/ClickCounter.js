import { useState } from "react";

const ClickCounter = () => {
    const [clicks, setClicks] = useState(0);
    return ( 
        <div className="clickCounter">
            <button onClick={()=> setClicks (clicks+ 1)}>Click</button> 
            <button onClick={() => setClicks(0)}>Reset</button>
            <p>Number of Clicks: {clicks}</p>
        </div>
     );
}
 
export default ClickCounter;