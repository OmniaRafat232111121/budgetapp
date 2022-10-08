import React from 'react'

const AddExpenseForm = () => {
  return (
   <form >
   <div className='row'>
   <div className='col-sm col-lg-4'>
   <label className="mt-3"  for='name'>Name</label>
   <input
     
       required='required'
       type='text'
       class='form-control'
       id='name'
   />

   </div>

   <div className='col-sm col-lg-4'>
   <label className="mt-3"  for='name'>Name</label>
   <input
     
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
