import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import { NewExpense } from '../../types';
import { useStyles } from './styles';

interface Props {
  addNewExpense(): void;
  newExpense: NewExpense;
  setNewExpense(arg: NewExpense): void;
  setAddingExpense(arg: boolean): void;
}

const AddExpense: React.FC<Props> = ({ addNewExpense, newExpense, setNewExpense, setAddingExpense }) => {
  const classes = useStyles();

  return (
    <div className={classes.form}>
      <TextField
        className={classes.nameInput}
        variant='outlined'
        size='small'
        placeholder='Name'
        value={newExpense.name}
        onChange={e => setNewExpense({ ...newExpense, name: e.target.value })}
      />
      <TextField
        className={classes.priceInput}
        variant='outlined'
        size='small'
        type='number'
        onChange={e => setNewExpense({ ...newExpense, price: e.target.value})}
        value={newExpense.price}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <Button
        variant='contained'
        disableElevation
        className={classes.saveButton}
        onClick={() => {
          addNewExpense();
          setAddingExpense(false);
        }}
      >
        Save
      </Button>
      <Button
        disableElevation
        className={classes.saveButton}
        onClick={() => {
          setNewExpense({ name: '', price: '' })
          setAddingExpense(false);
        }}
      >
        Cancel
      </Button>
    </div>
  );
};

export default AddExpense;
