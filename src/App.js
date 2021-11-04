// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import FreePlay from './components/FreePlay.js';

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar />
          <main className="text-center mainContainer">
            <Switch>
              <Route exact path="/">
                <ItemListContainer />
              </Route>
              <Route exact path="/product/:productId" component={ItemDetailContainer} />
              <Route exact path="/category/:categoryId" component={ItemListContainer} />
              <Route exact path="/free2play" component={FreePlay} />
            </Switch>
          </main>
        </Router>
    </div>
  );
}

export default App;
