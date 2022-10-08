import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
    const expenses=[
        {id:1212,name:'Shopping',cost:30},
        {id:1212,name:'Shopping',cost:10},
        {id:1212,name:'Shopping',cost:20},
        {id:1212,name:'Shopping',cost:90},


    ]
  return (
    <div>
      {.map((expence)=>(
        <ExpenseItem 
        id={expenses.id}
        name={expenses.name}
        cost={expenses.cost}/>
      ))
      }
    </div>
  )
}

export default ExpenseList
