import React from 'react'

const Budget = () => {
  const {budget} = useContext();
  return (
    <div className='alert alert-secondary'>
      <span>Budget: £ {budget}</span>
    </div>
  )
}

export default Budget
