import { Grid, Paper } from "@mui/material";
import { BiTrashAlt, BiCheck } from "react-icons/bi";
import { theme } from '../../themes/Theme';


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
    
    <Paper elevation={4} color='' sx={{backgroundColor: theme.palette.secondary.light, pt: 2, pl: 2}}>
        <Grid container>
            <Grid item md={11}>
                <div><p className={(item.obtained === false ? 'normal' : 'strike')}>{item.text}</p></div>
            </Grid>
            <Grid item>
                <div><button type="button" className="btn btn-success" onClick={handleObtained}><BiCheck /></button></div>
            </Grid>
            <Grid item>
                <div><button type="button" className="btn btn-danger" onClick={handleDelete}><BiTrashAlt /></button></div>
            </Grid>
        </Grid>
        
    </Paper>
    </div>
  )
}

export default ShoppingListItem