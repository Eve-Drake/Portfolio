
const ShoppingListForm = ({setItem, shoppingList, setShoppingList, item, setFilter}) => {

    const handleChange = (e) =>{
        setItem(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setShoppingList([
            ...shoppingList, {text: item, obtained: false, id: Math.random()*1000 }
        ]);
        setItem('')
    }

    const handleFilter = (e)=>{
        setFilter(e.target.value)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
                <span>
                    <span item sx={{p: 1}}>
                        <input 
                            type="text" 
                            required
                            placeholder="Enter an Item"
                            onChange={handleChange}
                            value = {item}
                            className="form-control" 
                            id="itemName" 
                            aria-describedby="itemName" />
                    </span>
                        
                    <span >  
                        <button>Submit</button>
                    </span>  
                    

                    <span>
                        
                        <label >Filter List</label>
                            <select className="select" onChange={handleFilter} aria-label="Filter">
                                <option defaultValue="all">All</option>
                                <option value="pending">Pending</option>
                                <option value="purchased">Purchased</option>
                            </select> 
                    </span>
                </span>

        </form>            
        
        
    </div>
  )
}

export default ShoppingListForm