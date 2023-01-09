import React,{memo} from "react";

const Child1 = (props) =>
{
    console.log("Child re-render")
    return(
        <>
        <p>Counter1: {props.counter}</p>
        <button onClick={props.onClick}>Increment 1</button>
       
        </>
    )
}
export default memo(Child1)