
import './App.css';

//components
import  Header from './components/header';
import Addtransaction from './components/addtransaction';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';

import { GlobalProvider } from './context/GlobalState'
import Balance from './components/Balance';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <Addtransaction />
        </div>
    </GlobalProvider>
  );
}

export default App;
