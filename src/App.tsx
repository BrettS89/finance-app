import './App.css';
import Expenses from './modules/expenses';

function App() {
  return (
    <div className="App">
      <h2 style={{ fontWeight: 900 }}>SODIE FAMILY MONTHLY FINANCIALS</h2>
      <Expenses />
    </div>
  );
}

export default App;
