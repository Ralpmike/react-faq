import { useState } from "react";

export const quotes = [
  {
    id: 1,
    author: "John Doe",
    quote:
      "The best way to find yourself is to lose yourself in the service of others",
  },
  {
    id: 2,
    author: "John Peter",
    quote:
      "Not every good thing is right at the right time, but every good thing is right at the right place",
  },
  {
    id: 3,
    author: "Samuel Daniel",
    quote:
      "Far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    id: 4,
    author: "Ekechukwu Agnes",
    quote: "He who layes down with a heavy heart will never be able to stand",
  },
  {
    id: 5,
    author: "Raphael Ezenwa",
    quote:
      "Trust yourself. You know more than you think you do. You are braver than you believe, more talented than you seem, and capable of more than you think you are.",
  },
  {
    id: 6,
    author: "Nnamdi Chukwu",
    quote:
      "Passion is the fire that keeps a person going when all around them there is silence.",
  },
  {
    id: 7,
    author: "Jeremy Chukwu",
    quote:
      "Life is like a box of chocolates. You never know what you're going to get.",
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  console.log(index);

  function nextQuote() {
    if(index >= 0 && index < quotes.length - 1) {
      setIndex(index + 1)
    }
    else if(index <= quotes.length - 1) {
     return
    }
    
  }


  function prevQuote() {
     if (index <= quotes.length - 1 && index > 0) {
       setIndex(index - 1);
     } 
  }
  

  console.log(quotes[index]);

  return (
    <div className="slider">
      <div className="quote">
        <div className="quote_header">
          <p>{quotes[index].author}</p>
          <div>
            <button onClick={prevQuote}>left</button>
            <button onClick={nextQuote}>right</button>
          </div>
        </div>
        <p>{quotes[index].quote}</p>
      </div>
    </div>
  );
}
