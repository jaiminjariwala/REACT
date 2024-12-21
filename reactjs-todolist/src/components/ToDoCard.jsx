import React from 'react'

// receive children content via props or properties of the component

export default function ToDoCard(props) {
  // below is the syntax of JAVASCRIPT DESTRUCTURING
  // It is a shorthand syntax to extract "children" property from the "props" object, later assigning it to "children" variable.
  // Same as saying... const children = props.children
  const {children} = props  
  return (
    // the parent element must have a unique key, because the index of each element in an array is always unique
    <li className='todoItem'>
      {children /* calling this children will render <p>{todo}</p> */}  
      <div className='actionsContainer'>
        <i className="fa-regular fa-pen-to-square"></i>
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </li>
  )
}
