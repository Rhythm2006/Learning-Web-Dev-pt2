import { useState } from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { counterAtom } from './store/atoms/counter'
// Atoms are units of state hat can be read froma nd written to from any component. When an 
// atom state changes, all components that subscribe to that atom will re render.
function App() {
  

  return (
    <>
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
      
    </>
  )
}

function Counter(){
  
  return (
    <div>
      <Count/>
      <Increase/>
      <Decrease/>
    </div>
  )
}

function Count(){
  const count = useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}
function Increase(){
  const setCount = useSetRecoilState(counterAtom)
  function increase(){
    setCount(c=>c+1);
  }
  return <div>
  <button onClick={increase}>Increase</button></div>
}

function Decrease(){
  const setCount = useSetRecoilState(counterAtom)
  function decrease(){
    setCount(c=>c-1);
  }
  return <div>
  <button onClick={decrease}>Decrease</button></div>
}
export default App
