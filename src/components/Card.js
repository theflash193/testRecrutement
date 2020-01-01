import React, { Component } from 'react';
import {Card as BootstrapCard, Button, Col, Row} from 'react-bootstrap'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: false }
    }

    test = () => {
        this.setState({isClicked: !this.state.isClicked} );
        this.props.onClick();
    }

    render() {
        const text = (this.state.isClicked) ? "Retirer du panier" : "Ajouter au panier";

        return (
            <Col className="justify-content align-item-bottom" lg={4} md={6} xs={6}>
                <BootstrapCard style={{ width: '10rem' }}>
                    <BootstrapCard.Img variant="top" src={this.props.article.cover} />
                    <BootstrapCard.Body>
                        <p>{this.props.article.title}</p>
                        <h4 className="text-center">{this.props.article.price} &euro;</h4>
                    </BootstrapCard.Body>
                    <BootstrapCard.Footer>
                        <Row className="justify-content-center">
                            <Button onClick={this.test}>{text}</Button>
                        </Row>
                    </BootstrapCard.Footer>
                </BootstrapCard>
            </Col>
        )
     }
}
 
export default Card;