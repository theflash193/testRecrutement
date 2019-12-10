import React, { Component } from 'react';
import ButtonArticle from './ButtonArcticle';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {
        console.log(this.props);
        let myComponent;

        if (this.props.article != undefined) { 
            myComponent = <div>
            <img src={this.props.article.cover} style={{height: 400, width: 400}}></img>
            <ButtonArticle onClick={this.props.addArticle}></ButtonArticle>
            <p></p>
    </div>
         } else { 
             myComponent = <h1>jojo</h1>;
          }
        return ( myComponent );
    }
}
 
export default Card;