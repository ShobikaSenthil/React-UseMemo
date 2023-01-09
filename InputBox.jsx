import React,{memo} from "react";

const InputBox = (props) =>
{
    console.log("Rendering Inputbox")
    return(
    <input type="text" value={props.search} onChange={(e) => props.onChange(e.target.value)}/>
    )
}
export default memo(InputBox)