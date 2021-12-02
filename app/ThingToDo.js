import React from "react";
import { connect } from "react-redux";

const ThingToDo = (props) => {
    console.log("Props from ThingsToDo: ", props)
    return ( 
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <hr />
            <h3 >Activity will apear here</h3>
            <button>Click to get an activity</button>
        </div>
    )
}

// getter of data from a store
let mapStateToProps = (state) => {
    return {
        count: state.count,
        toDo: state.toDo,
    }
  }

let mapDispatchToProps = (dispatch) => {
        return {

        }
    }
  
  const ConnectedThingToDoComponent = connect(mapStateToProps)(ThingToDo)
  

export default ConnectedThingToDoComponent