import React,{useContext} from 'react'
import { AppContext } from '../context/AppContext';

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
     {i}
    </div>
  )
}

export default Budget
