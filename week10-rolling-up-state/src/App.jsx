import { useState } from 'react'
import './App.css'
// As your application grows, you find out that multiple components need to access the same state,
// instead of duplicationg each state for each component, you can lift the state to the lowest common ancestor 
// allowing the common ancestor to manage it.
// Not the optimal way to do it.
function App() {
  

  return (
    <>
      <LightBulb/>
    </>
  )
}

function LightBulb(){
  const [isLightOn,setIsLightOn] = useState(true);
  return <>
  <BulbState isLightOn={isLightOn}/>
  <BulbToggle setIsLightOn={setIsLightOn}/>
  </>
}

function BulbState({isLightOn}){
  return <>
  {isLightOn?"Bulb On":"Bulb Off"}
  </>
}

function BulbToggle({setIsLightOn}){
  function toggleLight(){
    setIsLightOn(currentState => !currentState)
  }
  return <>
  <button onClick={toggleLight}>Toggle Light</button>
  </>
}

export default App
