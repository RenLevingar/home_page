import data from '../Utils/data';
import SingleQuestion from './Question';
import {useState} from 'react';

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about Logins</h3>
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