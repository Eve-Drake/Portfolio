import { useState } from "react";

const ShoppingListForm = ({shoppingList, setShoppingList, setFilter}) => {

    const [item, setItem] = useState('')
    const [noItem, setNoItem] = useState(false)

    const handleSubmit = () =>{

        if(item){
            setShoppingList([
                ...shoppingList, {text: item, obtained: false, id: Math.random()*1000 }
            ]);
            setItem('')
        }
        else{
            setNoItem(true)
        }
        
    }

    const handleFilter = (e)=>{
        setFilter(e.target.value)
    }

  return (
    
        <div className="shopping-list-form">
            <input 
                className="shopping-list-form-input"
                onChange={e => setItem(e.target.value)}
                type="text"
                required

            />

            <button onClick={handleSubmit} className="shopping-list-form-button">Add</button>
            
            <div className="shopping-list-filter">
                <label htmlFor="filter-select">Filter List: </label>
                <select className="filter-select" onChange={handleFilter} aria-label="filter-select">
                    <option defaultValue="all">All</option>
                    <option value="pending">Pending</option>
                    <option value="purchased">Purchased</option>
                </select> 
            </div>
                
        </div>            
        
        
    
  )
}

export default ShoppingListForm