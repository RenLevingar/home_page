import React from 'react'
import { GoTriangleDown } from "react-icons/go";
import Acc from './Accordian'

const Nav = () => {
  return (
    <section className='navSection'>
        <div className="navAccodian">
            <Acc/>
        </div>
        <div className='navButtons'>
            <button className='navButton'><strong>Music<GoTriangleDown /></strong></button>
            <button className='navButton'><strong>Notepad<GoTriangleDown /></strong></button>
            <button className='navButton'><strong>Quote<GoTriangleDown /></strong></button>
        </div>
    </section>
  )
}

export default Nav