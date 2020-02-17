import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SearchBar}></Route>
      </Switch>
    </Router>
  );
}

export default App;
