import React, { useEffect, useRef } from "react";

function App(){
  return(
    <>
      <InputFocus/>
      <Counter/>
    </>
  )
}

export default App;

// 1. Auto focus = The cursor directly on the input field , In generally The cursor not on the input field.
function InputFocus(){

  const data = useRef(null)
  const onSubmitHandler = (e)=>{
    e.preventDefault()
    console.log(data.current.value)
  }

  useEffect(()=>{
    data.current.focus()    //After rendering the component in browser , UseEffect hook call and directly focus on the input field.
  },[])

  return(
    <>
    <form onSubmit={onSubmitHandler}>
      <h1>1.Auto focus = The cursor automatically on the input field.</h1>
      <input  ref={data} type="text" placeholder="Enter the data .... " />
      <input type="submit" />
    </form>
      
    </>
  )
}


//2. updating the counter value without re-render the component.
function Counter(){

  let count = useRef(0)
  let counterElement = useRef(null)    // useRef is used for reference to dom element , We can change the element content by using useRref

  //updating dom element manually by assigning text to it.
  let updateDom = ()=>{
    if(counterElement.current){
      counterElement.current.innerHTML = `Counter : ${count.current}`
    }
  }

  //If i use this , This increment the value without performing event . And also i can increment by tapping button.
  useEffect(()=>{
    const setTime = setInterval(()=>{
    count.current +=1
    updateDom()
    },1000)

    return () => clearInterval(setTime)
  },[])

  let countUpdate = ()=>{
    count.current +=1
    updateDom()
  }

  return(
    <>
      <h1 ref={counterElement}>Counter : {count.current}</h1>
      <button onClick={countUpdate} >Click</button>
    </>
  )
}