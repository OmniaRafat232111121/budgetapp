import React from 'react'

const Budget = () => {
  const {budget} = useContext(Ap);
  return (
    <div className='alert alert-secondary'>
      <span>Budget: £ {budget}</span>
    </div>
  )
}

export default Budget
