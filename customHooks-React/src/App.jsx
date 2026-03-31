import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// Custom hooks in React are a powerful feature that allows you to encapsulate and reuse stateful logic across different components. They are essentially JavaScript functions that can use React hooks internally. By creating custom hooks, you can abstract away complex logic, making your components cleaner and more manageable.

// ### Why Use Custom Hooks?

// 1. **Reusability**: If you find yourself using the same logic in multiple components, a custom hook can help you avoid code duplication.
// 2. **Separation of Concerns**: They allow you to separate business logic from UI logic, making your components more focused and easier to understand.

function useCounter(){
  const [count,setCount] = useState(0);
  function increaseCount(){
    setCount(c=>c+1);
  }

  return {
    count: count,
    increaseCount: increaseCount
  }
}





function App() {
  

  return (
    <>
      <Counter/>
    </>
  )
}

function Counter(){
  const { count, increaseCount } = useCounter() //customHooks

  return (
    <>
      <button onClick={increaseCount}>Counter {count}</button>
    </>
  )
}

export default App
