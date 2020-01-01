import React, { Component } from 'react'
import { Row, Container, Col, ListGroup, Button} from 'react-bootstrap';
import { ArticlesContext } from '../ArticlesContext';
import {getBestOffer} from '../utils/reductions'
import {Link} from "react-router-dom";
// import Card from '../components/Card';

class ShoppingCart extends Component {
    static contextType = ArticlesContext;

    constructor(props) {
        super(props);
        this.state = { offer: [] }
    }

    componentDidMount() {
        if (this.context.state.articles !== undefined && this.context.state.articles.length !== 0) {
            const urlRequest = this.createUrlOfferRequest(this.context.state.articles); 
            fetch(urlRequest)
                .then(data => data.json())
                .then(data => {
                    // console.log(data)
                    this.setState({ ...this.state, offers: data, totalPrize: this.getTotalPrize(this.context.state.articles), isSucceed: true })
                })
                .catch(err => this.setState({ ...this.state, error: err , isSucceed: false}))
         }
    }

    getTotalPrize(articles) {
        let totalPrize = 0;
        for (const article of articles) {
            totalPrize += article.price;
        }
        return totalPrize;
    }

    createUrlOfferRequest(articles) {
        let urlRequest = "";
        let isbns = "";
        
        for (const article of articles) {
            isbns += (article.isbn !== articles[articles.length - 1].isbn) ? article.isbn + "," : article.isbn;
        }
        urlRequest = "http://henri-potier.xebia.fr/books/" + isbns + "/commercialOffers";
        return urlRequest;
     }

    handerTransaction(articles) {
        this.context.setArticles({});
     }

    render() {
        console.log(this.context);
        const articles = this.context.state.articles.map((article, index) => {
            return (<ListGroup.Item key={index.toString()}> {article.title} {article.price}&euro;</ListGroup.Item>)
        });

        if (this.context.state.articles.length === 0) {
            return (
                <Container>
                    <Row>
                        <Col className="text-align-center" lg={12}>
                            <h5>Vous n'avez pas d'article dans votre panier</h5>
                        </Col>
                        <Col className="align-center" lg={12}>
                            <Link to="/">
                                <Button>Retour a la Boutique</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>)
        }
        return (
        <Container>
            <Row>
                <Col lg={12}>Liste des achats:</Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <ListGroup>
                        {articles}
                    </ListGroup>
                </Col>
                <Col lg={6}>
                    Total : {this.state.totalPrize} &euro;
                </Col>
            </Row>
            <Row>
                <Col lg={9}>Nous pouvons vous proposer une reduction de sur ces articles</Col>
                <Col lg={3}>
                    <Link to="/">
                        <Button onClick={this.handlerTransaction}>Comfirmer la transaction</Button>
                    </Link>
                </Col>
            </Row>
        </Container> );
    }
}
 
export default ShoppingCart;
