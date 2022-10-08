import React from 'react'

const ExpenseTotal = () => {
   const {expenses}=useContext(AppContext);
  const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);
  
  return (
    <div className='alert alert-primary'>
       <span>Spent So Far: £{}</span> 
    </div>
  )
}

export default ExpenseTotal
