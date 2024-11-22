import { useState } from "react";

function App() {
  return (
    <>
      <Counter />
      <FormChange />
      <Toggling />
    </>
  );
}

export default App;

function Counter() {
  let [counter, setCounter] = useState(0);

  return (
    <>
      <h1 className="text-primary">Counter : {counter}</h1>
      <button
        className="btn btn-danger "
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click
      </button>
    </>
  );
}

function FormChange() {
  let [text, setText] = useState("");

  return (
    <>
      <input
        className="d-block mt-3 "
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <h2 className="text-primary">Name: {text}</h2>
    </>
  );
}

function Toggling() {
  let [visible, setVisible] = useState(false);

  return (
    <>
      <button
        className="btn btn-primary "
        onClick={() => setVisible(!visible)}>
        
        {
        visible ? "Hide" : "Show"
        }

      </button>

      {
      visible && <h1 className="text-primary">I'm visible </h1>
      }
    </>
  );
}
