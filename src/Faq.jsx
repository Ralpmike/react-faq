import { useState } from "react";
import { faqs } from "./assets/faqs.js";
import Button from "./Button";

function Faq() {
  // const 
  const [show, setShow] = useState(null)

  // console.log(show)

  function handleClick(id){
    console.log(id)
    if(id === show){
      setShow(null)
      return
    }
    setShow(id)
  }
  return (

    <>
      {faqs.map((faq) => {
        console.log(typeof faq.id);
        return (
          <li key={faq.id}>
            <h2 onClick={() => handleClick(faq.id)}>
              {faq.question} <Button clicked={faq.id === show ? true : false} />
            </h2>
            {faq.id === show ? <p>{faq.answer}</p> : ""}
          </li>
        );
      })}
    </>
  );
}

export default Faq;