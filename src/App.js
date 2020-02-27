import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';
import Product from './components/Product';
import Payment from './components/Payment';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchBar} />
        <Route exact path="/shopping-cart" component={ShoppingCart} />
        <Route path="/product/:id_of_product" component={Product} />
        <Route path="/payment" component={Payment} />
      </Switch>
    </Router>
  );
}

export default App;
