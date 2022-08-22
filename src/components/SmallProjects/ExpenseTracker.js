import { useState } from "react";


const ExpenseTracker = () => {
    const [Balance, setBalance] = useState(0);
    const [outgoing, setOutgoing] = useState(0);
    const [incoming, setIncoming] = useState(0);
    const [lastIncoming, setLastIncoming] = useState(0);
    const [lastOutgoing, setLastOutgoing] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        let amnt = incoming - outgoing;
        setLastIncoming(incoming);
        setLastOutgoing(outgoing);
        setBalance(amnt + Balance);
        setIncoming(0);
        setOutgoing(0);
    }


    return ( 
        <div className="expenseTracker">
            <h1>{Balance}</h1>
            <p>Last Incoming Funds: {lastIncoming} </p>
            <hr></hr>
            <p>Last Outgoing Funds: {lastOutgoing}  </p>

        </div>
     );
}
export default ExpenseTracker;