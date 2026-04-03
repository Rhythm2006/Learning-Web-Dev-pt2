import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useFetch } from './hooks/useFetch'
import { usePrev } from './hooks/usePrev'

// function App() {
//   const [currentPost, setcurrentPost] = useState(1);
//   const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost,5);

//   if(loading){
//     return(
//     <div>
//       Loading....
//     </div>)
//   }

//   return (
//     <>
//       <button onClick={()=>{setcurrentPost(1)}}>Button 1</button>
//       <button onClick={()=>{setcurrentPost(2)}}>Button 2</button>
//       <button onClick={()=>{setcurrentPost(3)}}>Button 3</button>
//       <br/>
//       <hr />
//       {JSON.stringify(finalData)}
//     </>
//   )
// }


function App() {
  const [state, setState] = useState(0);

  const prev = usePrev(state);

  return <>
  <p>{state}</p>
  <button onClick={()=>{
    setState( (curr) => curr + 1)
  }}>Click Me</button>
  <p>Prev Vale {prev}</p>
  </>
}

export default App
