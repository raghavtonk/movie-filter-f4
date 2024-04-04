import { Children } from "react";

export default function Button({children}){
    function handleClick(){
        console.log(`Filtering by ${children}`)
    }
    return(
        <button onClick={handleClick}>{children}</button>
    )
}