import React from 'react'

const Budget = () => {
  const {b} = useContext(contextValue);
  return (
    <div className='alert alert-secondary'>
      <span>Budget: 2000£</span>
    </div>
  )
}

export default Budget