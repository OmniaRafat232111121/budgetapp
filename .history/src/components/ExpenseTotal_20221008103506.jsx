import React from 'react'

const ExpenseTotal = () => {
   const {expenses}=useContext(AppContext)
  const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);
  
  return (
    <div className='alert alert-primary'>
       <span>Spent So Far: 1200£</span> 
    </div>
  )
}

export default ExpenseTotal
