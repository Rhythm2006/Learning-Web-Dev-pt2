import { useState,useEffect,memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// memo lets you skip rerendering a component when its props are unchanged.

// React says that if a component re renders then all its children will also re render,
// but if you memoize a component, the component  re renders only when theres a change in the prop/state.
function App() {
  

  return (
    <>
    <Counter />
    </>
  )
}

function Counter(){
  const [count,setCount] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setCount(c=>c+1);
    },3000);
  },[]);

  return (<div>
    <CurrentCount count = {count}/>
    <Increase />
    <Decrease />
  </div>)
}

const CurrentCount = memo(function ({count}){
  return (<div>
    {count}
  </div>)
})

const Increase = memo(function (){
  return (<div>
    <button>Increase</button>
  </div>)
})

const Decrease = memo(function (){
  return (<div>
    <button>Decrease</button>
  </div>)
})
export default App
