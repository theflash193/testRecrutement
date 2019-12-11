import React, { Component } from 'react'
import SearchBar from '../components/SearchBar.js'
import Card from '../components/Card.js';
import ButtonShoppingCart from '../components/ButtonShoppingCart.js';
import { Spinner, Button, Row, Col, Carousel, Container } from 'react-bootstrap';

const INITIAL_STATE = {
    articles: [],
    filterArticles: [],
    selectedArticles: [],
    filter: "",
    isLoaded: true,
    isSucceed: false,
    error: {},
}

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }

    componentDidMount() {
        fetch("http://henri-potier.xebia.fr/books")
            .then(data => data.json())
            .then(data => {
                // Adding id property for each article
                const articles = data.map((article, index) => { article.assign(article, {...article, id: index}) });

                this.setState({ ...this.state, articles: articles, filterArticles: articles, isSuccess: true })
            })
            .catch(err => this.setState({ ...INITIAL_STATE, error: err , isSucceed: false}))
    }

    handlerFilter = (e) => {
        let filter;
        
        e.preventDefault();
        if (e.target.value === "") { 
            this.setState({ ...this.state, filter: "", filterArticles: this.state.articles})
        } else {
            filter = this.state.article.filter(article => article.title.includes(e.target.value));
            this.setState({ ...this.state, filter: e.target.value, filterArticles: filter});
        }
    }

    HandlerAddArticle = (id) => {
        let index;

        if (this.state.articles.find(article => article.id === id) === undefined) {
            this.state.selectedArticles.push(this.state.articles[id])
        } else { 
            index = this.state.selectedArticles.find(article => article.id === id);
         }
    }

    render() {
        const Cards = (this.state.isSuccess) ? 
            this.state.filterArticles.map(article => { return <Card key={index.toString()} article={article} handlerOnClick={this.HandlerAddArticle(index)}></Card> })
            : <Spinner></Spinner>;

        return (<div>
                {/* <Row >
                </Row> */}
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
