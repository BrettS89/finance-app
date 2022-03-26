import { useEffect, useState } from 'react';
import {
  createExpense as apiCreateExpense,
  getExpenses as apiGetExpenses,
  deleteExpense as apiDeleteExpense,
} from '../../api';
import ExpenseChart from './expense-chart';
import ExpenseList from './expense-list';
import { formatExpenses } from './utilities';
import { Expense, NewExpense } from '../../types';
import { useStyles } from './styles';

const Expenses = () => {
  const classes = useStyles();

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [newExpense, setNewExpense] = useState<NewExpense>({ name: '', price: '' });

  const getExpenses = () => {
    apiGetExpenses()
      .then(data => setExpenses(formatExpenses(data)))
      .catch(console.log);
  };

  const addNewExpense = async () => {
    try {
      if (!newExpense.name || !newExpense.price) {
        alert('Must include a name and price');
        return;
      }
      const createdExpense = await apiCreateExpense(newExpense);
      setExpenses(formatExpenses([...expenses, createdExpense]));
      setNewExpense({ name: '', price: '' });
    } catch(e) {
      alert('Somethingw went wrong while adding this expense.');
    }
  };

  const deleteExpense = async (_id: string) => {
    try {
      await apiDeleteExpense(_id);
      const updatedExpenses = expenses.filter(e => e._id !== _id);
      setExpenses(formatExpenses(updatedExpenses));
    } catch(e) {
      if (e instanceof Error) {
        alert(e.message);
      } else {
        alert('Something went wrong');
      }
    }
  };

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div className={classes.container}>
      <ExpenseChart expenses={expenses} />
      <ExpenseList
        addNewExpense={addNewExpense}
        expenses={expenses}
        newExpense={newExpense}
        setNewExpense={setNewExpense}
        deleteExpense={deleteExpense}
      />
    </div>
  );
};

export default Expenses;
