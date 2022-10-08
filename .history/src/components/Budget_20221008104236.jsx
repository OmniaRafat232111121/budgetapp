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
      ty
    })
    setIsEditing(false);
  }
   return (
    <div className='alert alert-secondary'>
      <span>Budget: £{budget}</span>
    </div>
  )
}

export default Budget
