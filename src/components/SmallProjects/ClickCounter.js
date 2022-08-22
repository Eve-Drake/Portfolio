import { useState } from "react";
import { Button } from "@mui/material";

const ClickCounter = () => {
    const [clicks, setClicks] = useState(0);
    return ( 
        <div className="clickCounter">
            <Button variant="secondary" onClick={()=> setClicks (clicks+ 1)}>Click</Button> 
            <Button variant="secondary" onClick={() => setClicks(0)}>Reset</Button>
            <p>Number of Clicks: {clicks}</p>
        </div>
     );
}
 
export default ClickCounter;