import React,{useContext} from 'react'
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const {budget,dispatch}=useContext(AppContext)
   const [isEditing,setIs]
  return (
    <div className='alert alert-secondary'>
      <span>Budget: £{budget}</span>
    </div>
  )
}

export default Budget
