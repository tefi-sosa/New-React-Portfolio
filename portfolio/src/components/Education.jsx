import React from 'react'
import EducationList from './EducationList'
import { info } from './utils/education'
import { IoDocumentSharp } from 'react-icons/io5';

function Education() {
  return (
    <div className='education'>
      <IoDocumentSharp size={80} className='resume-icon' onClick={() => window.open('https://docs.google.com/document/d/13fQjLiGR40HIMCNjS-_0wDZlikgZgivsJHUvbvlSBBc/edit?usp=sharing')} target="_blank"/>
      <div className='education-list'>
        {info.map(({name, school, date}) => (
          <EducationList name={name} school={school} date={date}/>
        ))}        
      </div>
    </div>
  )
}

export default Education