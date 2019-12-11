import React, { Component } from 'react';
import ButtonArticle from './ButtonArcticle';
import {Card as BootstrapCard, Button, Col, Row} from 'react-bootstrap'
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {
        const synopsis = this.props.article.synopsis.map(text => text);

        console.log(this.props);
        return (
            <Col className="justify-content-md-center" lg={4} md={12} xs={12}>
                <BootstrapCard style={{ width: '10rem' }}>
                    <BootstrapCard.Img variant="top" src={this.props.article.cover} />
                    <BootstrapCard.Body>
                        <h5>{this.props.article.title}</h5>
                        <h4 className="text-center">{this.props.article.price} &euro;</h4>
                    </BootstrapCard.Body>
                    <BootstrapCard.Footer>
                        <Row className="justify-content-md-center">
                            <Button variant="primary">Ajouter au panier</Button>
                        </Row>
                    </BootstrapCard.Footer>
                </BootstrapCard>

            </Col>
        )
     }
}
 
export default Card;