import React,{useState} from "react";
import { useCallback } from "react";
import Child1 from "./Child1" 
 
function Usecallback1() {
    const [counter1,setCounter1] = useState(0);
    const [counter2,setCounter2] = useState(0);

    const updateCounter1 = useCallback(() =>{
        console.log("counter1 incremented",counter1)
        setCounter1(prev=>prev+1)
    },[])
    const updateCounter2 = () =>{
        console.log("counter2 incremented")
        setCounter2(prev=>prev+1)
    }
    console.log("Parent re-render")
    return(
        <div>
            {/* <p>counter1: {counter1}</p> */}
           
            <Child1 counter={counter1} onClick={updateCounter1}/>
            {/* <button onClick={updateCounter1}>Increment1</button> */}
            <p>counter2: {counter2}</p>
            <button onClick={updateCounter2}>Increment2</button>
        </div>
    )
}
export default Usecallback1