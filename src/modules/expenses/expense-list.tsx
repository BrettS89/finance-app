import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import { useStyles } from './styles';
import ExpenseItem from './expense-item';
import AddExpense from './expense-add';
import { Expense, NewExpense } from '../../types';

const monthlyIncome = 13000;
const contributions = 1250;

interface Props {
  addNewExpense(): void;
  expenses: Expense[];
  newExpense: NewExpense;
  setNewExpense(arg: NewExpense): void;
  deleteExpense(arg: string): Promise<void>;
}

const ExpenseList: React.FC<Props> = ({ addNewExpense, expenses, newExpense, setNewExpense, deleteExpense }) => {
  const classes = useStyles();
  const [addingExpense, setAddingExpense] = useState<boolean>(false);

  const totalExpenses = expenses.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  const savings = monthlyIncome + contributions - totalExpenses;

  const renderExpenses = expenses.map(e => (
    <ExpenseItem
      key={e._id}
      expense={e}
      deleteExpense={deleteExpense}
    />
  ));

  const renderTotal = () => (
    <div className={classes.item} style={{ marginTop: 15, marginBottom: 0, }}>
      <div className={classes.name} style={{ width:  250, }}>
        Expenses
      </div>
      <div className={classes.price}>
        ${totalExpenses}
      </div>
    </div>
  );

  const renderIncome = () => (
    <div className={classes.item} style={{ marginTop: 15, marginBottom: 0 }}>
      <div className={classes.name} style={{ width:  250, }}>
        Gross Income
      </div>
      <div className={classes.price}>
        ${monthlyIncome}
      </div>
    </div>
  );

  const render401k = () => (
    <div className={classes.item} style={{ marginTop: 15, marginBottom: 0 }}>
      <div className={classes.name} style={{ width:  250, }}>
        401K Contributions
      </div>
      <div className={classes.price}>
        ${contributions}
      </div>
    </div>
  );

  const renderNet = () => (
    <div className={classes.item} style={{ marginTop: 15, marginBottom: 30 }}>
      <div className={classes.name} style={{ width:  250, }}>
        Savings
      </div>
      <div className={classes.price} style={{ width: 250 }}>
        ${savings} (${savings * 12}/year)
      </div>
    </div>
  );

  return (
    <div className={classes.expensesComponent}>
      {renderExpenses}
      {renderIncome()}
      {renderTotal()}
      {render401k()}
      {renderNet()}
      {!Boolean(addingExpense) && (
        <div>
          <Button
            variant='contained'
            className={classes.saveButton}
            disableElevation
            onClick={() => setAddingExpense(true)}
          >
            Add Expense
          </Button>
        </div>
       
      )}
      {Boolean(addingExpense) && (
        <AddExpense
          addNewExpense={addNewExpense}
          newExpense={newExpense}
          setNewExpense={setNewExpense}
          setAddingExpense={setAddingExpense}
        />
      )}
    </div>
  );
};

export default ExpenseList;
