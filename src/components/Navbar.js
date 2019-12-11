import React, { Component } from 'react'
import { Container, Nav, Spinner, Button, Carousel, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";

class Navbar extends Component {
  
  render() {
    return (
            <Nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <Container>
                <Link to="/">
                  <a className="navbar-brand" href="#">Xebia Shop</a>
                </Link>
                <Button className="navbar-toggler" type="Button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </Button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <Link to="/">
                          <a className="nav-link" href="#">Home
                            <span className="sr-only">(current)</span>
                          </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="fa fa-shopping-cart"></a>
                    </li>
                  </ul>
                </div>
              </Container>
          </Nav>);
    }
}
 
export default Navbar;
