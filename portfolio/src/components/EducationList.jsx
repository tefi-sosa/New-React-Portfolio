import React from 'react'

const EducationList = ({name, school, date}) => {
  return (
    <div>
      <h4>—</h4>
      <p>{school}</p>
      <h4>{name}</h4>
    </div>
  )
}

export default EducationList