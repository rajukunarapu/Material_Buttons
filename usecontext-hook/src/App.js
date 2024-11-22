import { createContext, useContext } from "react";

let context = createContext()

function App(){
  return(
    <>
      <Parent data="Raju"/>
      <Parent1/>
    </>
  )
}

export default App;


// Props drilling

function Parent(props){
  return(
    <>
      <Child data1={props.data}/>
    </>
  )
}

function Child(props){
  return(
    <>
      <Grandchild  data2={props.data1}/>
    </>
  )
}

function Grandchild(props){
  return(
    <>
      <h1>My self {props.data2}</h1>
    </>
  )
}




function Parent1(){

  return(
    <>
      <context.Provider value={[{name:"Raju",age:22},{name:"Zayn",age:33},{name:"Mike",age:37},{name:"alice",age:40},{name:"bob",age:42}]}>
        <Child1/>
      </context.Provider>
    </>
  )
}

function Child1(){
  return(
    <>
      <Grandchild1/>
    </>
  )
}

function Grandchild1(){
  const p = useContext(context)
  console.log(p)

  let filtered = p.find((item)=> item.age > 30)
  console.log(filtered)

  return(
    <>
    {/* {
      filtered.map((item,ind)=> <h1 key={ind}>Name : {item.name} and age : {item.age}</h1>)
    } */}
    <h1>Name :{filtered.name} and Age : {filtered.age}</h1>
    </>
  )
}
