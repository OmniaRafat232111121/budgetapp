import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
    const expenses=[
        {id:1212,name:'Shopping',cost:30},
        {id:12,name:'Shopping',cost:10},
        {id:12332,name:'Shopping',cost:20},
        {id:192,name:'Shopping',cost:90},
    ];
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
