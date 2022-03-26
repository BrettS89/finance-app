import React from 'react';
import { useStyles } from './styles';
import { Expense } from '../../types';

interface Props {
  expense: Expense;
  deleteExpense(arg: string): Promise<void>;
}

const ExpenseItem: React.FC<Props> = ({ expense, deleteExpense }) => {
  const classes = useStyles();

  return (
    <div className={classes.item}>
      <div
        className={classes.color}
        style={{ backgroundColor: expense.color }}
      />
      <div className={classes.name}>
        {expense.name}
      </div>
      <div className={classes.price}>
        ${expense.price}
      </div>
      <div
        onClick={() => deleteExpense(expense._id)}
        className={classes.deleteExpense}
      >
        X
      </div>
    </div>
  );
};

export default ExpenseItem;
