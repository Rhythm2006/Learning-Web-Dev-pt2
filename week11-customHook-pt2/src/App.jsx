import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useFetch } from './hooks/useFetch'

function App() {
  const [currentPost, setcurrentPost] = useState(1);
  const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

  if(loading){
    return(
    <div>
      Loading....
    </div>)
  }

  return (
    <>
      <button onClick={()=>{setcurrentPost(1)}}>Button 1</button>
      <button onClick={()=>{setcurrentPost(2)}}>Button 2</button>
      <button onClick={()=>{setcurrentPost(3)}}>Button 3</button>
      <br/>
      <hr />
      {JSON.stringify(finalData)}
    </>
  )
}

export default App
