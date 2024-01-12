import data from '../Utils/data';
import SingleQuestion from './Question';
import {useState} from 'react';

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [display, setDisplay] = useState("none")

  function changeDisplay() {
    if(display === ""){setDisplay("none")} else {setDisplay("")}
  }
  return (
    <main>
      <button onClick={changeDisplay}>Info Switch</button>
      <div className="container">
        <h3 className='accTitle'>Info</h3>
        <section className="info">
          {questions.map(question=>{
            return <SingleQuestion key={question.id} {...question}/>
          })}
        </section>
      </div>
    </main>
  )
}

export default App