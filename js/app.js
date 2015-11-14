window.React = require('react');
window.ReactDOM = require('react-dom');
let Provider = require('react-redux').Provider;
let createStore = require('redux').createStore;
let mainReducer = require('./reducers');
let Main = React.createFactory(require('./components/Main'));

const targetEl = document.getElementById('mainContent');

ReactDOM.render(
  <Provider store={createStore(mainReducer)}>
    <Main />
  </Provider>,
  targetEl);
