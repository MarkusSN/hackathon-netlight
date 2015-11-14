require('babel-polyfill');
window.React = require('react');
window.ReactDOM = require('react-dom');
let Provider = require('react-redux').Provider;
let createStore = require('redux').createStore;
let reducer = require('./reducers');
let Main = React.createFactory(require('./components/Main'));

const targetEl = document.getElementById('mainContent');

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  targetEl);
