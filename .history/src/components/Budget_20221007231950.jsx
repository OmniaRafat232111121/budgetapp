import React from 'react'

const Budget = () => {
  const {budget} = useContext(AppConte);
  return (
    <div className='alert alert-secondary'>
      <span>Budget: £ {budget}</span>
    </div>
  )
}

export default Budget
