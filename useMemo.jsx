import React,{useState,useMemo} from "react";

const UseMemoEg1 = () =>
{
    const [count,setCount] = useState(0);

    // function square(){
    //     console.log("Rendering")
    //     return 2 * count;  
    // }

    const square = useMemo(()=>{
        console.log("Rendering UseMemo")
        return 2 * count; 
    },[count])

    return(
        <>
        <input type="text"  onChange={(e)=>setCount(e.target.value)}/>
        <p>{count}</p>
        
        {/* <p>Square: {square()}</p> */}
        <p>Square: {square}</p>

        </>
    )
}

export default UseMemoEg1