import React from 'react'

const Budget = () => {
  const {budget} = useContext(A);
  return (
    <div className='alert alert-secondary'>
      <span>Budget: £ {budget}</span>
    </div>
  )
}

export default Budget
