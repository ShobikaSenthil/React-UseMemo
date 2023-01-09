import React,{useCallback, useState} from "react";
import InputBox from "./InputBox";

const UsecallbackEg2 = () =>
{
    const [counter,setCounter] = useState(0);
    const [search,setSearch] = useState("");

    const updateCounter=()=>
    {
        console.log("Update Counter ",counter)
        setCounter(prev=>prev+1);
    }
    const onChange =useCallback((value) =>
    {
        // console.log("Onchange render")
        setSearch(value);
    },[search])
    // const onChange =(value) =>
    // {
    //     // console.log("Onchange render")
    //     setSearch(value);
    // }

    console.log("Parent render")

    return(
        <>
        <p>search: {search}</p>
        <InputBox onChange={onChange}/>
        <p>counter={counter}</p> 
        <button onClick={updateCounter}>Increment</button>
        </>
    )
}
export default UsecallbackEg2