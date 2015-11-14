require('babel-polyfill');
require('whatwg-fetch');

window.React = require('react');
window.ReactDOM = require('react-dom');
const Provider = require('react-redux').Provider;
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk');
const reducer = require('./reducers');
const Main = React.createFactory(require('./components/Main'));

const targetEl = document.getElementById('mainContent');

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  targetEl);
