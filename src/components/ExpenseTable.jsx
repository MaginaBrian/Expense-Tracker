// src/components/ExpenseTable.jsx
function ExpenseTable({ expenses, handleSort, deleteExpense, sortField, sortOrder }) {
    return (
      <table className="expense-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>
              Description
              <button onClick={() => handleSort('description')}>
                {sortField === 'description' ? (sortOrder === 'asc' ? '↑' : '↓') : '↕'}
              </button>
            </th>
            <th>
              Category
              <button onClick={() => handleSort('category')}>
                {sortField === 'category' ? (sortOrder === 'asc' ? '↑' : '↓') : '↕'}
              </button>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    onClick={() => deleteExpense(expense.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No expenses found</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
  
  export default ExpenseTable;