import { useEffect, useRef } from "react";
// Remember this property of React 
// Render and return
//then useEffect
// The reason it is different from useFetch is beacause useFetch was usinf useState which was rerendering and here we are using useRef
export function usePrev(value){
    const ref = useRef();

    useEffect(()=>{
        ref.current = value;
    },[value])

    return ref.current 
}