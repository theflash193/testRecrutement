import React, { Component } from 'react'
import SearchBar from '../components/SearchBar.js'
import Card from '../components/Card.js';
import ButtonShoppingCart from '../components/ButtonShoppingCart.js';
import { Spinner, Button, Row, Col, Carousel, Container } from 'react-bootstrap';

const INITIAL_STATE = {
    articles: [],
    filterArticle: [],
    filter: "",
    isLoaded: false,
    error: {},
    success: false,
}

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }

    componentDidMount() {
        this.setState({ ...this.state, isLoaded: !this.isLoaded });
        fetch("http://henri-potier.xebia.fr/books")
            .then(data => data.json())
            .then(data => this.setState({ ...this.state, articles: data, success: true }, console.log(data)))
            .catch(err => this.setState({ ...INITIAL_STATE, error: err }))
    }

    Handlerfilter = (e) => {
        e.preventDefault();
        this.setState({ ...this.state, filter: e.target.value })
    }

    render() {
        const Cards = (this.state.success) ? this.state.articles.map(article => { console.log(article); return <Card article={article}></Card> }) : <Spinner></Spinner>;

        return (<div>
            <Row>
                <Col lg={12}>
                    <Carousel></Carousel>
                    <Row></Row>
                </Col>
            </Row>
            <Container>
                <Row>
                        {Cards}
                </Row>
            </Container>
                </div>);
    }
}

export default Articles;
