import React, { useContext} from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
	const { expenses } = useContext(AppContext);
	
	return (
		<>
			<ul class='list-group mt-3 mb-3'>
				{expenses.map((expense) => (
					<ExpenseItem classN
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))}
			</ul>
		</>
	);
};

export default ExpenseList;