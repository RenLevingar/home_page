import React, { useState } from 'react';
import data from '../Utils/data';
import SingleQuestion from './Question';

const App = () => {
  // Gets the questiojns from the data doc
  const [questions, setQuestions] = useState(data);

  //  Declares the state of display
  const [display, setDisplay] = useState(false);

  // onclick functioj changing the display
  const changeDisplay = () => {
    setDisplay(!display);
  };

  return (
    <main>
      <button className="infoSwitch" onClick={changeDisplay}><strong>Display Info</strong></button>
      <div className={`container ${display ? 'visible' : 'hidden'}`}>
        <h3 className='accTitle'>Info</h3>
        <section className="info">
          {questions.map(question => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default App;
