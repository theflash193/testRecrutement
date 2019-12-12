import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

class ButtonShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: true }
    }

    handlerClick = () => {
        console.log("fire");
        this.setState({isClicked: !this.state.isClicked}, console.log(this.state));
        this.props.OnClick();
    }

    render() { 
        const text = (this.state.isClicked) ? "Retirer du panier" : "Ajouter au panier";
        // this.handlerClick();

        return ( <Button onClick={this.handlerClick}>{text}</Button> );
    }
}
 
export default ButtonShoppingCart;