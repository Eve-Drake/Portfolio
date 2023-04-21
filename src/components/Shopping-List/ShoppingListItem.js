import { FaTimesCircle, FaCheckCircle} from "react-icons/fa";


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
    <div className="shopping-list-item">
        <h5 className={(item.obtained === false ? 'item-name' : ' item-name strikethrough')}>{item.text}</h5>
        <button className='shopping-list-check' onClick={handleObtained}><FaCheckCircle /></button>
        <button className='shopping-list-delete' onClick={handleDelete}><FaTimesCircle /></button>
    </div>
  )
}

export default ShoppingListItem