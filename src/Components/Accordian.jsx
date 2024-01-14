import React, { useState } from 'react';
import data from '../Utils/data';
import SingleQuestion from './Question';

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [display, setDisplay] = useState(false);
  const changeDisplay = () => {
    setDisplay(!display);
  };

  return (
    <main>
      <button onClick={changeDisplay}>Info Switch</button>
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
