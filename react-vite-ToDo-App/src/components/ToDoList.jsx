import React from 'react'
import ToDoCard from './ToDoCard'

export default function ToDoList(props) {
    const { todos } = props
    return (
        <ul className='main'>
            {/* To render the above array values, the todos... we'll map our content */
                todos.map((todo, todoIndex) => {
                    return (
                        <ToDoCard key={todoIndex} {...props} index={todoIndex}>
                            {/* 
                                To render out children contents within the Parent component (here ToDoCard is a component), we receive childrens via PROPS (in ToDoCard)
                                
                                ToDoCard is a child component, and the parent ToDoList passes a value <p>{todo}</p> as a children to the ToDoCard component.
                            */}
                            <p>{todo}</p>
                        </ToDoCard>
                    )
                })}

        </ul>
    )
}
