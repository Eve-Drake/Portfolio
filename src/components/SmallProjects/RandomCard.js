import {useState} from 'react'

const GameBoard = () => {

    const [suitName, setSuitName] = useState('');
    const [cardName, setCardName] = useState('');

    //Scores
    const [value, setValue] = useState(0);

    //Card arrays, one to change during game and one to save the full deck

    const fullHearts= ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10,"J", "Q", "K"];
    const fullClubs= ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10,"J", "Q", "K"];
    const fullSpades= ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10,"J", "Q", "K"];
    const fullDiamonds= ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10,"J", "Q", "K"];

    const [diamonds, setDiamonds] = useState(["A", 2, 3, 4, 5, 6, 7, 8, 9, 10,"J", "Q", "K"]);
    const [clubs, setClubs] = useState(["A", 2, 3, 4, 5, 6, 7, 8, 9, 10,"J", "Q", "K"]);
    const [spades, setSpades] = useState(["A", 2, 3, 4, 5, 6, 7, 8, 9, 10,"J", "Q", "K"]);
    const [hearts, setHearts] = useState(["A", 2, 3, 4, 5, 6, 7, 8, 9, 10,"J", "Q", "K"]);

    //Resets the game
    const newGame =()=>{
        setDiamonds(fullDiamonds);
        setClubs(fullClubs);
        setHearts(fullHearts);
        setSpades(fullSpades);
        setValue(0)
    }

    //Draw card and remove it from deck
    const draw=()=>{
        //Randomise the suit
        let num = Math.floor(Math.random() * 4 + 1);
        let suit = '';
        switch(num){
            case 1:
                suit = hearts;
                setSuitName(' of Hearts');
                break;
            case 2:
                suit = clubs;
                setSuitName(' of Clubs');
                break;
            case 3:
                suit = diamonds;
                setSuitName(' of Diamonds');
                break;
            default:
                suit = spades
                setSuitName(' of Spades');
                break;
        }

        //Randomise the card
        let card = Math.floor(Math.random() * suit.length);
        
        //Remove the card
        const index = suit.indexOf(card);
            if (index > -1){
                suit.splice(index, 1);
            }
        
        //Display the card and assign value
        switch(suit[card]){
            case "K":
                setCardName('King');
                setValue(value + 13);
                break;
            case "Q":
                setCardName('Queen');
                setValue(value + 12)
                break;
            case "J":
                setCardName('Jack');
                setValue(value + 11)
                break;
            case "A":
                setCardName('Ace');
                let val = window.prompt('Should this Ace be worth 1 or 11?');
                    val = Number(val);
                setValue(value + val)
                break;
            default:
             setCardName(suit[card]);
             setValue(value + suit[card]);
             break;
            
        }
    }
    

  return (
    <div>
        <h2>{cardName}{suitName}</h2>
        <p> Value: {value} </p>
        <Button onClick={()=>(draw())}>Draw</Button>
        <Button onClick={()=>(newGame())}>Reset Deck</Button>
        
    </div>
  )
}

export default GameBoard