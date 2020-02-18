import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchBar} />
        <Route exact path="/shopping-cart" component={ShoppingCart} />
      </Switch>
    </Router>
  );
}

export default App;
