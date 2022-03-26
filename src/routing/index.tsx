import { Route, Routes } from 'react-router-dom';

import Expenses from '../modules/expenses';

export default () => {
  return (
    <Routes>
      <Route path='/' element={<Expenses />} />
    </Routes>
  );
};
