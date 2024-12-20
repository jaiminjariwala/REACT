import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"


// the function name should always be Capitalized and will always match as the file name for example... App.jsx
// App is the HIGHEST LEVEL PARENT COMPONENT!
// App is rendered in the main.jsx component!
function App() {

  return (
    // what we return from a function is known as JSX!
    // JSX is writting JS inside HTML!
    // JS goes insides the CURLY BRACES {} in JSX
    
    // We can render our sub-components in <main> tag, as if they are regular HTML Tags, the only difference is that, they are Capitalized!
    <main>
      <ToDoInput/>
      <ToDoList/>

    </main>
  )
}

export default App
