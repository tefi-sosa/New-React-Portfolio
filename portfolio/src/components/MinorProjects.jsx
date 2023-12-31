import React from 'react'
import { smallProjects } from './utils/minorProjeccts'

const MinorProjects = () => {
  return (
    <div className='minor-projects-container'
    data-aos="fade-right"
    data-aos-duration="1000"
    >
      {smallProjects.map(({name, GitHubLink}) => (
        <button className="small-project-btn" onClick={() => window.open(GitHubLink)}target="_blank">{name}</button>
      )      
      )}
    </div>
  )
}

export default MinorProjects