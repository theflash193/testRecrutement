import React, { Component } from 'react'
import Card from '../components/Card.js';
import { Spinner, Row, Col, Container } from 'react-bootstrap';

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
                const articles = data.map((article, index) => { const a = {...article, id: index} ; return a});

                this.setState({ ...this.state, articles: articles, filterArticles: articles, isSucceed: true })
            })
            .catch(err => this.setState({ ...INITIAL_STATE, error: err , isSucceed: false}))
    }

    handlerFilter = (e) => {
        let filter;
        
        e.preventDefault();
        if (e.target.value === "") { 
            this.setState({ ...this.state, filter: "", filterArticles: this.state.articles})
        } else {
            filter = this.state.articles.filter(article => article.title.includes(e.target.value));
            this.setState({ ...this.state, filter: e.target.value, filterArticles: filter});
        }
    }

    HandlerAddArticle = (id) => {
        let index;
        let updateArray;

        // console.log(id)
        // console.log(this.state.selectedArticles.indexOf(article => article.id === id))
        this.state.selectedArticles.forEach(a => console.log(a))
        // console.log(this.state.selectedArticles.inde(article => article.id === id))
        if (index = this.state.selectedArticles.findIndex(article => article.id === id) === -1) {
            // console.log(this.state.selectedArticles.indexOf(article => article.id === id))
            this.setState({...this.state, selectedArticles: this.state.selectedArticles.concat(this.state.articles[id])})
        } else { 
            this.setState({...this.state, selectedArticles: this.state.selectedArticles.filter(article => article.id !== id)})
        }
    }

    render() {
        // console.log(this.state);
        const Cards = (this.state.isSucceed && this.state.filterArticles !== undefined) ? 
            this.state.filterArticles.map((article, index) => {
            return <Card key={index.toString()} article={article} onClick={() => {this.HandlerAddArticle(index)}}></Card> 
            })
            :
            <Spinner></Spinner>;

        console.log(this.state);
        // console.log(this.HandlerAddArticle(2));
        return (<div>
                <Container>
                    <Row>
                        <Col lg={3} xs={12}>
                            <p>Recherche :</p>
                            <input style={{height: 40, width: "100%"}} type="search" placeholder="sorcier" onChange={(e) => {this.handlerFilter(e)}}></input>
                        </Col>
                        <Col lg={9} xs={12}>
                            <Container>
                                <Row>
                                        {Cards}
                                </Row>
                            </Container>
                        </Col >
                    </Row>
                </Container>
            </div>);
    }
}

export default Articles;
