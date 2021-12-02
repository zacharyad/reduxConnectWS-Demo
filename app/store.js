require("babel-polyfill");
import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import countReducer from './reducers/count.js'
import toDoReducer from './reducers/todo.js'


let reducer = combineReducers({
  todo: toDoReducer,
  counter: countReducer
}) //super reducer


/*
key -> the name to import in the mapstate
value: the reducer
*/
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware, reduxLogger));

export default store;
