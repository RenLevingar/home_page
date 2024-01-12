import {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className="question">
            <header>
                <h4 className='questionTitle'>{title}
                <button className='btn' onClick={()=>setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                </button>
                </h4>
            </header>
            {showInfo && <p className='accInfo'>{info}</p>}
        </article>
    )
}

export default Question