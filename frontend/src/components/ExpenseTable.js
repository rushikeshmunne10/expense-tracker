import React from 'react';

const ExpenseTable = ({ expenses }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense, index) => (
                    <tr key={index}>
                        <td>${expense.amount}</td>
                        <td>{expense.category}</td>
                        <td>{new Date(expense.date).toLocaleDateString()}</td>
                        <td>{expense.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseTable;
