import React, { Component, createContext } from "react";

const ArticlesContext = createContext({ color: "black" });

class ArticlesProvider extends Component {
  state = {
    articles: []
  };

    setArticles = (articles) => {
      this.setState({ articles });
  };

  render() {
    const value = {
      state: this.state,
      setArticles: this.setArticles
    };

    return (
      <ArticlesContext.Provider value={value}>
        {this.props.children}
      </ArticlesContext.Provider>
    );
  }
}

const { Consumer: ArticlesConsumer } = ArticlesContext;

export { ArticlesProvider, ArticlesConsumer, ArticlesContext };

// export default ArticlesContext;
