import React from 'react'

const AddExpenseForm = () => {
  return (
   <form >
   <div className='row'>
   <div className='col-sm col-lg-4'>
   <label   for='name'>Name</label>
   <input
       className="mt-3"
       required='required'
       type='text'
       class='form-control'
       id='name'
   />
   </div>
   </div>
   </form>
  )
}

export default AddExpenseForm
