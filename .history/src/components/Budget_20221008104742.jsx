import React,{useContext} from 'react'
import { AppContext } from '../context/AppContext';
import EditBudget from './EditBudget';
import ViewBudget from './ViewBudget';

const Budget = () => {
  const {budget,dispatch}=useContext(AppContext)
   const [isEditing,setIsEditing]=useState(false);
  
  const handleEditClick=()=>{
    setIsEditing(true);
  }
  const handleSaveClick=(value)=>{
    dispatch({
      type:'SET_BUDGET',
      payload:value
    })
    setIsEditing(false);
  }
   return (
    <div className='alert alert-secondary'>
     {isEditing ?(
    	<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
     
     ):(
      <ViewBudget
      <ViewBudget handleEditClick={handleEditClick} budget={budget} />
     )}
    </div>
  )
}

export default Budget
