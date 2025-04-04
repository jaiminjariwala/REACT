import { useState, useEffect } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"


// the function name should always be Capitalized and will always match as the file name for example... App.jsx
// App is the HIGHEST LEVEL PARENT COMPONENT!
// App is rendered in the main.jsx component!
function App() {

    // now we have stateful variable to interact with!
    const [todos, setTodos] = useState([])
    // to hold the current value declared by the user in the input field...
    const [todoValue, setTodoValue] = useState('')

    function persistData(newList) {
        localStorage.setItem('todos', JSON.stringify({ todos: newList }))
    }

    function handleAddTodos(newTodo) {
        /* 
          1. This function creates a new array named "newTodoList" using the spread operator "...". This operator takes all the existing values from the "todos" state array and spreads them into the new array.
    
          2. Add "newTodo" string to the end of the "newTodoList" array.
    
          3. Update the State: Call the "setTodos" function provided by the "useState" hook, to update the "todos" state with the "newTodoList" array. This triggers a re-render of the "App" component and its children (including "ToDoList").
        */
        const newTodoList = [...todos, newTodo]
        persistData(newTodoList)
        setTodos(newTodoList)
    }

    function handleDeleteTodo(index) {
        // filter method creates a new array containing only the elements that pass a certain condition (provided as a callback function). The callback function is executed for each element in the todos array
        const newTodoList = todos.filter((todo, todoIndex) => {
            return todoIndex !== index
        })
        persistData(newTodoList)
        setTodos(newTodoList)
    }

    function handleEditTodo(index) {
        const valueToBeEdited = todos[index]
        setTodoValue(valueToBeEdited)
        handleDeleteTodo(index)
    }

    useEffect(() => {
        if (!localStorage) {
            return
        }

        let localTodos = localStorage.getItem('todos')
        if (!localTodos) {
            return
        }

        localTodos = JSON.parse(localTodos).todos
        setTodos(localTodos)
    }, [])  // empty array means that this effect will only run once, when the page reloads

    return (
        // what we return from a function is known as JSX!
        // JS goes insides the CURLY BRACES {} in JSX

        // We can render our sub-components in <main> tag, as if they are regular HTML Tags, the only difference is that, they are Capitalized!\
        // below is an EMPTY FRAGMENT (Empty Div)
        <>
            <ToDoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} /* This attribute will be received by props passed as an argument in ToDoInput functional component */ />
            <ToDoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} /* passing attributes to ToDoList Component Tag */ />

        </>
    )
}

export default App
