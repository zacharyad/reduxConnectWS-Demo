import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store"
import {increment } from './reducers/count.js'

import {Provider, connect} from 'react-redux'
import ThingToDo from './ThingToDo';

const Counter = (props) => {
  console.log("Props from Counter: ", props)
  let {incrementFromStore} = props;

    return (
      <div id='container'>
        <div id='counter'>
          <h1>{props.countFromStore}</h1>
          <button onClick={() => {incrementFromStore()}}>Click to Count</button>
          <ThingToDo />
        </div>
      </div>
    );
}

// getter of data from a store
let mapStateToShowUpOnPropsOnThisComponent = ({counter}) => {
  console.log("State from count: ",counter)
  return {
    countFromStore: counter,
  }
}

// react-reduc is going to call your function mapStateToShowUpOnPropsOnThisComponent(reduxStateThatWasPassed)

//Setter of date into the store
let mapDispatchToShowUpOnPropsOnThisComponent = (dispatch) => {
  return {
    incrementFromStore: () => dispatch(increment()),
  }
}

const ConnectedCounter = connect(mapStateToShowUpOnPropsOnThisComponent, mapDispatchToShowUpOnPropsOnThisComponent)(Counter)

// in another file
ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
  document.getElementById('app')
);
