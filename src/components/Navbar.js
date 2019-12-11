import React, { Component } from 'react'
import { Container, Nav, Spinner, Button, Carousel, Row, Col} from 'react-bootstrap';

class Navbar extends Component {

    render() { 
        return (
            <Nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <Container>
              <a className="navbar-brand" href="#">Xebia Shop</a>
              <Button className="navbar-toggler" type="Button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </Button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home
                      <span className="sr-only">(current)</span>
                    </a>
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