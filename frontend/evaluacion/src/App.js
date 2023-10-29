import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListSupplierComponent from './components/ListSupplierComponent';
import AddSupplierComponent from './components/AddSupplierComponent';
import Inicio from './components/Inicio';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className= "container">
          <Switch>
              <Route exact path = "/" component = {Inicio}></Route>
              <Route path = "/suppliers" component = {ListSupplierComponent}></Route>
              <Route path = "/add-supplier" component = {AddSupplierComponent} ></Route>              
            </Switch>
        </div>
        <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
