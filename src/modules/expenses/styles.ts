import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    display: 'flex',
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
  },
  chartComponent: {
    display: 'flex',
    alignItems: 'center',
    width: 500,
    height: '100%',
    paddingRight: 30,
  },
  expensesComponent: {
    display: 'flex',
    width: 500,
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    paddingLeft: 30,
  },
  item: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  color: {
    height: 20,
    width: 20,
    marginRight: 30,
  },
  name: {
    marginRight: 30,
    fontWeight: 900,
    width: 200,
  },
  price: {
    fontWeight: 600,
    width: 55,
    fontSize: 14,
    fontStyle: 'italic',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
  },
  nameInput: {
    width: 200,
    marginRight: 5,
  },
  priceInput: {
    width: 100,
    marginRight: 5,
  },
  saveButton: {
    height: 40,
    marginRight: 5,
  },
  deleteExpense: {
    color: 'gray',
    cursor: 'pointer',
    '&:hover': {
      color: 'red',
   },
  },
}));
