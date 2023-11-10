import React from 'react'
import { smallProjects } from './utils/minorProjeccts'

const MinorProjects = () => {
  return (
    <div className='minor-projects-container'>
      {smallProjects.map(({name, GitHubLink}) => (
        <button onClick={() => window.open(GitHubLink)}target="_blank">{name}</button>
      )      
      )}
    </div>
  )
}

export default MinorProjects