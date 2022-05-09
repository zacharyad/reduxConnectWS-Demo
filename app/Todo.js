import React from 'react'
import {connect} from 'react-redux'

const Todo = (props) => {
    console.log("Props in Todo Component passed in from ConnectedCounter Comp: ", props)
    return (
        <div>
            <p><strong>Todo:</strong> {props.todo.activity}</p>
            <p><strong>Type:</strong> {props.todo.type}</p>
        </div>
    )
}

export default Todo