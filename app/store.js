require("babel-polyfill");
import {createStore, applyMiddleware} from 'redux';
import reduxLogger from 'redux-logger';
let api_call = 'https://www.boredapi.com/api/activity'
// WE NEED THE THUNK LIBRARY - redux-thunk

//WE NEED an AJAX library



// Type constants
const INCREMENT = 'INCREMENT';
const GOT_TO_DO = 'GOT_TO_DO'


// Action creators
export const increment = () => {
  return {
    type: INCREMENT
  };
};

const gotToDo = (toDo) => {
  return {
    type: GOT_TO_DO, 
    payload: toDo
  };
};

// Thunk Creator AREA


// reducer
const initialState = {
  count: 0,
  toDo: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
      case GOT_TO_DO:
      return {
        ...state,
        toDo: action.payload
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(reduxLogger));

export default store;
