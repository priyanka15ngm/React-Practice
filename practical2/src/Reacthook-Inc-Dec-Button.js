import React, { useState, useEffect } from "react";
var mysty = {
  textAlign: "center",
  backgroundColor:"green",
  borderRadius: 10,
  width:"50%",
  padding : 10,
  margin : 10,
  height:"10%",
}


function ReactDemo(){

  const[currState,futureState]=useState(0);

   // Similar to componentDidMount() and componentDidUpdate

   useEffect(() => {
    console.log("Hooks Effects called ");
  });

  const incFun = () =>{
    futureState(currState+1)
  }

  const decFun = () =>{
    futureState(currState-1)
  }

  const reset = () =>{
    futureState(0)
  }


  return(
    <div style={mysty}>
      <h1>{currState}</h1>
      <button onClick={incFun}>Inc</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decFun}>Dec</button>
      
    </div>
  )
}


export default ReactDemo;