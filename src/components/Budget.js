import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {dispatch, budget ,expenses ,currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        console.log("newBudget-->"+newBudget);

        const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);
        
        if(event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
        }else{
            dispatch({type:'SET_BUDGET',payload: event.target.value});
        }

        
    }
    
    
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
