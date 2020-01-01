import React, { Component } from 'react'
import { Container, Nav, Button, Navbar as BootstrapNavbar} from 'react-bootstrap';
import {Link} from "react-router-dom";

class Navbar extends Component {
  
  render() {
    return (
            <Nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <Container>
                <Link className="navbar-brand" to="/">
                  Xebia Shop
                </Link>
                <Button className="navbar-toggler" type="Button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </Button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to="/">
                          <p>Home
                            {/* <span className="sr-only">(current)</span> */}
                          </p>
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link to="/shoppingcart">
                        <p>Shoppingcart</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Container>
          </Nav>);
    }
}
 
export default Navbar;
