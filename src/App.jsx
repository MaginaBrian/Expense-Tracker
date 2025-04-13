// src/App.jsx
import { useState } from 'react';
import ExpenseTable from './components/ExpenseTable';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Groceries', amount: 50, description: 'Weekly shopping', category: 'Food' },
    { id: 2, name: 'Gas', amount: 30, description: 'Fuel for car', category: 'Transport' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState(''); // 'category' or 'description'
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'

  // Handle adding a new expense
  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
  };

  // Handle deleting an expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Handle sorting
  const handleSort = (field) => {
    const newSortOrder = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(newSortOrder);

    const sortedExpenses = [...expenses].sort((a, b) => {
      const valueA = a[field].toLowerCase();
      const valueB = b[field].toLowerCase();
      if (newSortOrder === 'asc') {
        return valueA > valueB ? 1 : -1;
      } else {
        return valueA < valueB ? 1 : -1;
      }
    });
    setExpenses(sortedExpenses);
  };

  // Filter expenses based on search term
  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseTable
        expenses={filteredExpenses}
        handleSort={handleSort}
        deleteExpense={deleteExpense}
        sortField={sortField}
        sortOrder={sortOrder}
      />
    </div>
  );
}

export default App;
