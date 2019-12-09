import React from 'react';
import './App.css';
import Articles from './screens/Articles.js';
import ShoppingCart from './screens/ShoppingCart.js';
import {BrowserRouter as Router,Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
      <Router>
        <div id="wrapper">
          <Switch>
            <Route path='/' exact component={Articles}/>
            <Route path='shoppingcart' component={ShoppingCart}/>
          </Switch>
        </div>
      </Router>

  );
}

export default App;
