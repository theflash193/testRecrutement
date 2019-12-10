import React, { Component } from 'react'

class SearchBar extends Component {
    state = {  }
    render() { 
        return ( <input type="text" onClick={(e) => this.props.HandlerClick(e)}></input> );
    }
}
 
export default SearchBar;