import { useState } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"


// the function name should always be Capitalized and will always match as the file name for example... App.jsx
// App is the HIGHEST LEVEL PARENT COMPONENT!
// App is rendered in the main.jsx component!
function App() {

  const [todos, setTodos] = useState([
    'Go to the gym',
    'Eat more fruits and vegetables',
    'Read a book',
  ])

  return (
    // what we return from a function is known as JSX!
    // JSX is writting JS inside HTML!
    // JS goes insides the CURLY BRACES {} in JSX
    
    // We can render our sub-components in <main> tag, as if they are regular HTML Tags, the only difference is that, they are Capitalized!\
    // below is an EMPTY FRAGMENT (Empty Div)
    <>
      <ToDoInput/>
      <ToDoList todos={todos} /* passing attributes to ToDoList Component Tag */ /> 

    </>
  )
}

export default App
