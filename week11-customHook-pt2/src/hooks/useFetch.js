import { useState, useEffect } from 'react'

export function useFetch(url){
    const [ finalData,setfinalData ] = useState({});
    const [loading,setloading] = useState(true);

    async function fetchData(){
        setloading(true);
        const data = await fetch(url);
        const json = await data.json();
        setfinalData(json);
        setloading(false);
    }

    useEffect(()=>{
        fetchData()
    },[url]);

    return {
        finalData,
        loading
    }
}
