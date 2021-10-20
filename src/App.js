// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js'
function App() {
  return (
    <div className="App">
        <NavBar />
        <main>
          <h3>ApperMarket</h3>
          <ItemListContainer greeting="Bienvenido" />
        </main>
    </div>
  );
}

export default App;
