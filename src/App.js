// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar />
          <main className="text-center mainContainer">
            <Switch>
              <Route exact path="/">
                <ItemListContainer greeting="ApperMarket" />
                <ItemDetailContainer itemId=/* {itemId}*/{2}/>
              </Route>
            </Switch>
          </main>
        </Router>
    </div>
  );
}

export default App;
