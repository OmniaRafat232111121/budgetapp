import React from 'react'

const AddExpenseForm = () => {
    const [name]
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
   <label className="mt-3"  for='name'>Cost</label>
   <input
     
       required='required'
       type='number'
       class='form-control'
       id='cost'
   />

   </div>
   <div className='row mt-3'>
   <div className='col-sm'>
   <button type='submit' class='btn btn-primary'>
   Save
</button>
   </div>
   </div>


   </div>
   </form>
  )
}

export default AddExpenseForm
