import React from "react";

let obj = {
    name:"raju",
    age:22
}

function Raju(){
    return(
        <>
            <h1>This is an Function component</h1>
            <Ex {...obj}/>
        </>
    )
}

export default Raju;


function Ex({name , age}){
    return(
        <>
            <h1>My self {name} and I am {age} Years old.</h1>
        </>
    )
}

export class Raju1 extends React.Component{
    render(){
        return(
            <>
                <h1>This is an Class Component</h1>
            </>
        )
    }
}
