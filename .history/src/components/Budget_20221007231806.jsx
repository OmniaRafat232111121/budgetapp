import React from 'react'

const Budget = () => {
  const {budget} = useContext(AppContext);
  return (
    <div className='alert alert-secondary'>
      <span>Budget: 2000£</span>
    </div>
  )
}

export default Budget
