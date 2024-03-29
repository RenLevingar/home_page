// Import Statement
import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import boopSfx from '../sounds/mixkit-vacuum-swoosh-transition-1465.wav';

// API URL
let url = "https://api.quotable.io/random"

function Quote() {
  const [quote, setQuote] = useState({
    content: '',
    author: '',
    length: 0
  }); //quote
  const [generate, setGenerate] = useState(false); //new quote generate
  const [count, setCount] = useState(0); //counter for animation re run
  const maxLength = 150; // the maxium length of the quote
  const [play] = useSound(boopSfx);

  // const BoopButton = () => {
  //   const [play] = useSound(boopSfx);
  //   return <button onClick={play}>Boop!</button>;
  // };

  useEffect(() => {
    fetch(url)
      .then((response) => {
        // Check for a 200 status 
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((quote) => {
        //makes sure that the quote isn't to long
        if (quote.length <= maxLength) {
          setQuote(quote);
        }
      })
      .catch((err) => console.log(err));
  }, [generate, maxLength]);

  // generatees the new quote on button click as well as reruns the animation
  function newQuote() {
    setGenerate(!generate);
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <section id="quotes" className='quoteSection'>
      <main className='quoteMain'>
        <div>
          {quote.content && (
            <>
              <h1 key={count} className='quote quoteTitle'>
                "<strong>{quote.content}</strong>"
              </h1>
              <h3>
                <em>-{quote.author}</em>
              </h3>
            </>
          )}
        </div>
        <button className="quoteButton" onClick={()=>{newQuote();play()}}>Generate New</button>
      </main>
    </section>
  );
}

export default Quote;

