


const ShoppingListItem = ({shoppingList, setShoppingList, item}) => {
    const handleDelete=()=>{
        setShoppingList(shoppingList.filter((listItem) => 
            listItem.id !== item.id)
        )
    }

    const handleObtained=()=>{
        setShoppingList(
            shoppingList.map((listItem) => {
                if (listItem.id === item.id){
                    return{
                        ...listItem,
                        obtained: !listItem.obtianed
                    }
                }
                return listItem;
            })
        )
    }

   

  return (
    <div>
    
    <div>
        <span div>
            <span item md={11}>
                <div><p className={(item.obtained === false ? 'normal' : 'strike')}>{item.text}</p></div>
            </span>
            <span item>
                <div><button onClick={handleObtained}>tick</button></div>
            </span>
            <span item>
                <div><button onClick={handleDelete}>bin</button></div>
            </span>
        </span>
        
    </div>
    </div>
  )
}

export default ShoppingListItem