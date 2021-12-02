require("babel-polyfill");
import {createStore, applyMiddleware} from 'redux';
import reduxLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk'

let api_call = 'https://www.boredapi.com/api/activity'
import axios from 'axios';

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

const gotToDo = (toDoObj) => {
  return {
    type: GOT_TO_DO, 
    payload: toDoObj
  };
};

// Thunk Creator AREA

export let goGetApiInfoThunk = () => {
  return async (dispatch) => {
    // we need use axios to get an activity
    let {data} = await axios.get(api_call)

    console.log(" GetState ", axios)
    dispatch(gotToDo(data));
  }
}



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

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware, reduxLogger));

export default store;
