import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
   const {expenses}=use
  return (
    <ul className='list-group'>
      {expenses.map((expense)=>(
        <ExpenseItem 
        id={expense.id}
        name={expense.name}
        cost={expense.cost}/>
      ))
      }
    </ul>
  )
}

export default ExpenseList
