import Main from './pages/main';
import OpenTrans from './pages/opentrans'
import HomePage from './pages/HomePage';
import AddTransactionPage from 'pages/main/AddTransactionPage';

function App() {
  return (
    <div className="App">
    <AddTransactionPage />
    {/* <Main /> */}
    <OpenTrans></OpenTrans>
    {/* <HomePage /> */}
  </div>
  );
}

export default App;
