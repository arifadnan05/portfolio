import React from 'react';
import ProjectBox from './ProjectBox';
import VitalCare from '../images/vitalCare.png'
import impactConnect from '../images/impactConnect.png'
import craftera from '../images/craftera.png'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={VitalCare} projectName="VitalCare" />
        <ProjectBox projectPhoto={impactConnect} projectName="impactConnect" />
        <ProjectBox projectPhoto={craftera} projectName="Carftera" />

      </div>

    </div>
  )
}

export default Projects