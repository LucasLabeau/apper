// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import Cart from './components/Cart.js';
import CartContextProvider from './components/context/CartContext.js';

function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <NavBar />
          <main className="text-center mainContainer">
            <Switch>
              <Route exact path="/">
                <ItemListContainer />
              </Route>
              <Route exact path="/product/:productId" component={ItemDetailContainer} />
              <Route exact path="/category/:categoryId" component={ItemListContainer} />
              <Route exact path="/freeToPlay" component={ItemListContainer} />
              <Route exact path="/cart" component={Cart} />
            </Switch>
          </main>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
