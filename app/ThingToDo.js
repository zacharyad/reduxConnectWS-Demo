import React from "react";
import { connect } from "react-redux";

const ThingToDo = (props) => {
    console.log("Props from ThingsToDo: ", props)
    return ( 
        <div>
   

                <h3>Activity will apear for each count</h3>
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