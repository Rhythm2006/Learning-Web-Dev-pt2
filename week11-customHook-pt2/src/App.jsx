import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useFetch } from './hooks/useFetch'
import { usePrev } from './hooks/usePrev'
import { useRef } from 'react'
//Debound usecase1
// function useDebounce(originalFn){
//   const currentFn = useRef();
//   const fn = () => {
//   clearTimeout(currentFn.current);
//   currentFn.current = setTimeout(originalFn,200);
// }
//   return fn ;
  
// }

// Debound usecase 2

const useDebounce = (value,delay) => {
  const [debounceValue,setdebounceValue] = useState(value);

  useEffect(()=>{
    const handler = setTimeout(()=>{
      setdebounceValue(value);
    },delay)

    return () => {
      clearTimeout(handler);
    }
  },[value,delay])

  return debounceValue;
}

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


// function App() {
//   const [state, setState] = useState(0);

//   const prev = usePrev(state);

//   return <>
//   <p>{state}</p>
//   <button onClick={()=>{
//     setState( (curr) => curr + 1)
//   }}>Click Me</button>
//   <p>Prev Vale {prev}</p>
//   </>
// }

//Debound Usecase 1
// function App(){
//   function backendFn(){
//     console.log("Data return");
//   }

//   const debouncedFn = useDebounce(backendFn);

//   return <>
//   <p>Type here</p>
//   <input type='text' onChange={debouncedFn}></input></>
// }

//Debounce usecase 2

function App(){
  const [inputVal,setinputVal] = useState("");
  const debouncedVal = useDebounce(inputVal,200);

  function change(e) {
    setinputVal(e.target.value);
  }

  useEffect(()=>{
    console.log("Expensive operation has been performed")
  },[debouncedVal]);

  return <>
  <p>Type here</p>
  <input type='text' onChange={change}></input></>
}





export default App
