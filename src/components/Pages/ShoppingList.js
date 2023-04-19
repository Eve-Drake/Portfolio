import ShoppingListForm from '../Shopping-List/ShoppingListForm'
import { useState, useEffect } from "react";
import ShoppingListItemList from '../Shopping-List/ShoppingListItemList'
import BootstrapNav from '../Utilities/Nav';
import { div, Paper, Typography } from '@mui/material';
import { theme } from '../../themes/Theme';
import ContactActionButton from '../Utilities/ContactActionButton';

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
    <div>
      <BootstrapNav />
      <ContactActionButton />
      <Paper sx={{
				backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
				borderRadius: "0",
				minHeight: '20vh', 
        pb: 2
			  }}>
          <div>
            <h2 >A Simple Shopping List</h2>
            <h3>Functionality...</h3>
            <Typography variant='body1'>This is a shopping list created to demonstrate passing values and functions from parent components to child 
              components.It consists of: Shopping, ShoppingListForm, ShoppingListItemList and ShoppingList Item. 
              The parent component contains all the state (the shopping list and any selected filter). </Typography>
          </div>
      </Paper>

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
    </div>
  )
}

export default Shopping