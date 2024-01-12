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
            <button className='navButton'><strong><a href="#music" className='links'>Music<GoTriangleDown /></a></strong></button>
            <button className='navButton'><strong><a href="#quotes" className='links'>Quote<GoTriangleDown /></a></strong></button>
            <button className='navButton'><strong><a href="#notepad" className='links'>Notepad<GoTriangleDown /></a></strong></button>
        </div>
    </section>
  )
}

export default Nav