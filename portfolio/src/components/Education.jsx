import React from 'react'
import EducationList from './EducationList'
import { info } from './utils/education'

function Education() {
  // const info = [
  //   {
  //     name: 'AWS Certified Cloud Practitioner',
  //     school: 'AWS Training and Certification',
  //     date: '2023'
  //   },
  //   {
  //     name: 'Certificate in Web Development',
  //     school: 'Devmountain',
  //     date: '2022'
  //   },
  //   {
  //     name: 'BS in Exercise Physiology',
  //     school: 'Brigham Young University Idaho',
  //     date: '2020'
  //   }
  // ];

  return (
    <>
      {info.map(({name, school, date}) => (
        <EducationList name={name} school={school} date={date}/>
      ))}
    </>
  )
}

export default Education