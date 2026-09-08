import Accordion from "./components/Accordion";
import FaqCard from "./FaqCard";
import FaqWrapper from "./FaqWrapper";

// import { useState } from "react";

//Handling Events in React

//State
//useState
//useReducer
//useContext

function App() {
  //  function click(){
  //   alert("You Clicked!")
  // }

  // let [value, setValue] = useState(0)

  // let count = 0

  // function increment(){
  //   // count++
  //   // const x = value++
  //   // console.log(x)
  //   // value = value + 1
  //   setValue(value + 1)
  //   setValue(value + 1)
  //   setValue(value + 1)
  //   setValue(value + 1)
  //   setValue(value + 1)
  //   setValue((preValue) => preValue + 1)
  //   setValue((preValue) => preValue + 1)
  //   setValue(48)
  //   // setValue(x)
  // }

  // function decrement(){
  //   // value = value - 1
  //   // value--

  //   setValue(value - 1)
  //   // setValue(value--)
  // }

  return (
    // <div className="App" >
    //   <button onClick={click}>Click</button>
    // <div className="counter">
    //   <button onClick={increment}>Increment</button>

    //   <p className="count">{value}</p>

    //   <button onClick={decrement}>Decrement</button>
    // </div>
    // </div>
    <>
      <FaqWrapper>
        <FaqCard />
      </FaqWrapper>
      <Accordion />
    </>
  );
}

export default App;
