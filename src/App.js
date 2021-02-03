import OpenTrans from './pages/opentrans'
import HomePage from './pages/HomePage';
import AddTransactionPage from 'pages/AddTransactionPage';
import EditTransactionPage from 'pages/EditTransactionPage';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/addtransaction" component={AddTransactionPage}></Route>
      <Route exact path="/edittransaction" component={EditTransactionPage}></Route>
      <Route exact path="/opentransaction" component={OpenTrans}></Route>
  </div>
  
  </Router>
  );
}

export default App;
