import React, { Component } from 'react'

class ButtonArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentWillMount() { 
        fetch("http://henri-potier.xebia.fr/books")
        .then(response => response.json())
        .then(books => console.log(books))
        fetch("http://henri-potier.xebia.fr/books/c8fabf68-8374-48fe-a7ea-a00ccd07afff,a460afed-e5e7-4e39-a39d-c885c05db861,cef179f2-7cbc-41d6-94ca-ecd23d9f7fd6,fcd1e6fa-a63f-4f75-9da4-b560020b6acc/commercialOffers")
        .then(response => response.json())
        .then(books => console.log(books))
     }

    render() { 
        return ( <div>s</div> );
    }
}
 
export default ButtonArticle;