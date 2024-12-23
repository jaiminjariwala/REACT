import React from 'react'

// receive children content via props or properties of the component
export default function ToDoCard(props) {
    // below is the syntax of JAVASCRIPT DESTRUCTURING
    // It is a shorthand syntax to extract "children" property from the "props" object, later assigning it to "children" variable.
    // Same as saying... const children = props.children
    const { children, handleDeleteTodo, index, handleEditTodo } = props
    return (
        <li className='todoItem'>
            {children /* calling this children will render <p>{todo}</p> */}
            <div className='actionsContainer'>

                {/* Edit button */}
                <button onClick={() => { handleEditTodo(index) }}>
                    <i className="fa-regular fa-pen-to-square"></i>
                </button>

                {/* Delete button */}
                <button onClick={() => { handleDeleteTodo(index) }}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>

            </div>
        </li>
    )
}
