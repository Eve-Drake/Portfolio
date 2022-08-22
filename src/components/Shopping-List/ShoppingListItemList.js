import React from 'react'
import ShoppingListItem from './ShoppingListItem'

const ShoppingListItemList = ({shoppingList, setShoppingList, filteredList }) => {

  return (
    <div >

        {filteredList.map(item =>(
            <ShoppingListItem 
              key={item.id} 
              text={item.text} 
              id={item.id} 
              shoppingList={shoppingList} 
              setShoppingList={setShoppingList}
              item={item}


              />
        ))}
    </div>
  )
}

export default ShoppingListItemList