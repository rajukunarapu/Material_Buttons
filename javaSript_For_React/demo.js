

let elements =[
    React.createElement("p",{id:"para"},"Hello World"),
    React.createElement("p",{id:"para"},"Hello World"),
    React.createElement("p",{id:"para"},"Hello World")
]


let root =  ReactDOM.createRoot(document.getElementById("root"))
root.render(elements)

