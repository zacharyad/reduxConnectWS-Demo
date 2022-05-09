import React from 'react'
import {connect} from 'react-redux'
import { increment } from './store/count';
import Todo from './Todo'

const Counter = (props) => {
    console.log("Props from ConnectedCounter Component: ", props);
    let {incrementFromStore} = props;

    return (
      <div id='container'>
        <div id='counter'>
            <h1>{props.countFromStore}</h1>
            <input type="number" name="multiplyBy" id="multInput" />
            <button onClick={() => incrementFromStore()}>Increment</button>
            <br />
            <Todo todo={props.todo} />
        </div>
      </div>
    );
}


let mapStateToProps = (state) => {
  return {
    countFromStore: state.count,
    todo: state.todo
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    incrementFromStore: () => dispatch(increment())
  }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default ConnectedCounter