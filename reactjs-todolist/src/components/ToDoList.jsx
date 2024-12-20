import React from 'react'

export default function ToDoList() {
  let todos = [
    'Go to the gym',
    'Eat more fruits and vegetables',
    'Read a book',
  ]
  return (
    <ul>
      {/* To render the above array values, the todos... we'll map our content */
      todos.map((todo, todoIndex) => {
        return (
          // the parent element must have a unique key, because the index of each element in an array is always unique
          <li key={todoIndex}>{todo}</li>
        )
      })}

    </ul>
  )
}
