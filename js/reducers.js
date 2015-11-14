/* eslint-disable no-shadow */
const { DO_ACTION  } = require('./actions');

const initalState = {
  someState: {}
};

const stateReducer = (someState, action) => {
  switch (action.type) {
    case DO_ACTION: return someOtherState;
    default: return someState;
  }
};

module.exports = function(state = initalState, action) {
  return {
    someState: stateReducer(state.someState, action),
  };
};
