import React from "react";
import { connect } from "react-redux";
import {goGetApiInfoThunk} from './reducers/todo.js'

const ThingToDo = (props) => {
    console.log("Props from ThingsToDo: ", props)

    return ( 
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <hr />
            <p>this is suppose to be an activity</p>
            {/* when clicked this will use a thunk to get to an api for activities */}
            <button onClick={() => props.getActivity()}>Click to get an activity</button>
        </div>
    )
}

// getter of data from a store
let mapStateToProps = ({todo}) => {
    console.log("STATE: ", todo)
    return {
        toDo: todo,
    }
  }

let mapDispatchToProps = (dispatch) => {
        return {
            getActivity: () => dispatch(goGetApiInfoThunk())
        }
    }
  
  const ConnectedThingToDoComponent = connect(mapStateToProps, mapDispatchToProps)(ThingToDo)
  

export default ConnectedThingToDoComponent