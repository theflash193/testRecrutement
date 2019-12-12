import React, { Component } from 'react'
import { Row, Container } from 'react-bootstrap';
// import Card from '../components/Card';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedArticle: null }
    }

    render() { 
        return ( <Container>
            <Row>
                Pour la liste de 
            </Row>
        </Container> );
    }
}
 
export default ShoppingCart;
