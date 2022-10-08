import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';

function App() {
  return (
    <div className='container'>
    <h1 className='mt-3'>My Budget Planner</h1>
    <div className='row mt-3'>
    <div className='col-sm'>
    <Budget/>
    </div>
    <div className='col-sm'>
    <Rema
    </div>
    <div className='col-sm'>
    <ExpenseTotal/>
    </div>

    </div>
    
    </div>
  );
}

export default App;
