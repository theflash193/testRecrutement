import {Context} from 'react'

export const ArticlesContext = React.createContext({
  articles: null,
  updateArticles: () => {}
}); 