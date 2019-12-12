import React from 'react';
import './App.css';
import './assets/css/shop-homepage.css';
import Articles from './screens/Articles.js';
import ShoppingCart from './screens/ShoppingCart.js';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import { Container} from 'react-bootstrap';
// import {ArticlesContext} from 'Context.js';
import Navbar from './components/Navbar'

function App() {

  return (
      <Router>
        <Navbar></Navbar>
          <Container>
            <Switch>
              <Route path='/' exact component={Articles}/>
              <Route path='shoppingcart' component={ShoppingCart}/>
            </Switch>
        </Container>
        <footer className="py-5 bg-dark">
          <Container>
              <p className="m-0 text-center text-white">Copyright © Your Website 2019</p>
          </Container>
        </footer >

      </Router>

  );
}

export default App;
