import React, { useState } from 'react'

// props: receives properties from its parent component App.jsx
export default function ToDoInput(props) {
    // destructuring the handleAddTodos function from the props
    const { handleAddTodos, todoValue, setTodoValue } = props

    return (
        <header>

            {/* Whenever the value of an input field changes, it calls the "onChange" function. The "e" stands for an event. */}
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} type="text" placeholder='Enter todo...' />

            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>

        </header>
    )
}
