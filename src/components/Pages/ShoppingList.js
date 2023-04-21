import ShoppingListForm from '../Shopping-List/ShoppingListForm'
import { useState, useEffect } from "react";
import ShoppingListItemList from '../Shopping-List/ShoppingListItemList'
import Nav from '../Utilities/Nav';

const Shopping = () => {
    const [item, setItem] = useState("");

    const [shoppingList, setShoppingList] = useState([]);
    const [filter, setFilter] = useState('all');
    const [filteredList, setFilteredList] = useState([]);
    
    useEffect(()=>{
      switch(filter){
         case "purchased":
            setFilteredList(shoppingList.filter(item => item.obtained === true));
            break;

          case "pending":
            setFilteredList(shoppingList.filter(item => item.obtained === false));
            break;

          default:
            setFilteredList(shoppingList);
            break;
      }
    
    }, [shoppingList, filter]);


  return (
    <>
      <Nav />
      <div>
          
          <h2>The Shopping List</h2>
          <h3>Functionality...</h3>
          <p>
            This page features a shopping list application that showcases the fundamental aspects of React development, 
            including passing down props, managing state, and using forms.
          </p>
          <p>
              This section of the website is made up of four components: Shopping, ShoppingListForm, 
              ShoppingListItemList, and ShoppingListItem. The parent component holds all the state, including the 
              shopping list inself (in the form of an array) and any selected filters. 
            </p>
          
      </div>

      <div>
        <h2>Shopping...</h2>
          <ShoppingListForm 
            setShoppingList={setShoppingList} 
            shoppingList={shoppingList} 
            setItem={setItem} item={item} 
            setFilter={setFilter}
            />

          <ShoppingListItemList 
            shoppingList={shoppingList} 
            setShoppingList={setShoppingList}
            filteredList = {filteredList}  
            />
      </div>
    </>
  )
}

export default Shopping