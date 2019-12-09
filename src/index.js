import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

// let store = createStore();
const s = () => { 
    
 }
const increment = () => { 
    return { 
        type: 'INCREMENT'
     }
 };

const counter = (state = 0, action) => { 
    switch (action.type) {
         case "INCREMENT":
             return state + 1;

        default:
            return state;
    }
}

let store = createStore(
    counter,
    window.__REDUX_DEVTOOLS__ && window.REDUX_DEVTOOLS_EXTENSION__() 
);

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());              
store.dispatch(increment());
store.dispatch(increment());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
