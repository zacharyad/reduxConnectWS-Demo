import {createStore, applyMiddleware} from 'redux';
import reduxLogger from 'redux-logger';
import countReducer from './count'

const store = createStore(countReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(reduxLogger));

export default store;