import React, { useContext } from 'react';
import { FaMinusCircle  } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    console.log ("Location-->"+currency);
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button color = "red" onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><FaMinusCircle color="red" size='1.5em' onClick={handleDeleteExpense}></FaMinusCircle ></td>
        </tr> 
    );
};

export default ExpenseItem;
