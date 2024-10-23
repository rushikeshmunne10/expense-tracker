import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import ExpenseChart from './components/ExpenseChart';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Fetch expenses from the backend when the component mounts
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/expenses'); // Update with your API endpoint
        setExpenses(response.data);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchExpenses();
  }, []);

  const addExpense = async (expense) => {
    try {
      const response = await axios.post('http://localhost:8080/api/expenses', expense); // Update with your API endpoint
      setExpenses([...expenses, response.data]);
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />

      <h2 className="mt-5">Expenses List</h2>
      <ExpenseTable expenses={expenses} />

      <h2 className="mt-5">Spending by Category</h2>
      <ExpenseChart expenses={expenses} />

    </div>
  );
}

export default App;
