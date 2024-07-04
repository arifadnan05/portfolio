import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    VitalCareDesc : "Vital care is a online medicine shop. User can order in online, and payment method is stripe. You can visit and see more feature",
    VitalCareGithub : "https://github.com/arifadnan05/vital-care",
    VitalCareWebsite : "https://vital-care.netlify.app",

    impactConnectDesc : "Volunteer management website. Organizer can job post specific location, user can apply this job. Visit my website and explore this website more feature",
    impactConnectGithub : "https://github.com/arifadnan05/impact-connect",
    impactConnectWebsite : "https://impact-connect-19304.web.app",

    CarfteraDesc : "A platform for art enthusiasts to explore, add, and manage various art and craft items. Enjoy features like user authentication, protected routes, CRUD operations, and a dynamic home page with a dark/light theme toggle.",
    CarfteraGithub : "https://github.com/arifadnan05/craftera",
    CarfteraWebsite : "https://craftera-29a5a.web.app",

  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank' rel="noreferrer">
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank' rel="noreferrer">
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox