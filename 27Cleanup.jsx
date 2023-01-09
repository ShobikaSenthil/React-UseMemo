import React from "react";
import { useState ,useEffect} from "react";

const Cleanup = () =>{
    const [counter1,setCounter1] = useState(0);
    const [counter2,setCounter2] = useState(0);

    useEffect(() => {
        console.log("First use Effect with [] dependency");
    
        return () => {
          console.log("First use Effect with [] dependency cleanup");
        };
      }, []);
    
      useEffect(() => {
        // console.log(counter1);
        console.log("Second use Effect with [counter1] dependency");
       
        return () => {
        //   console.log(counter1);
          console.log("Second use Effect with [counter1] dependency cleanup");
        };
      }, [counter1]);
    
      useEffect(() => {
        // console.log(counter2);
        console.log("Third use Effect with [counter2] dependency");
    
        return () => {
            // console.log(counter2);
          console.log("Third use Effect with [counter2] dependency cleanup");
        };
      }, [counter2]);
    
    return(
        <>
        
        <button onClick={()=> setCounter1((prev) => prev + 1 )}>Increment1</button>
        <button onClick={()=> setCounter2((prev) => prev + 1 )}>Increment2</button>

        </>
    )
}

export default Cleanup;