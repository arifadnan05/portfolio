import React from 'react'; 
import {FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma, FaHtml5} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiTailwindcss, SiVercel} from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";

const Skills = ({skill}) => {
    const icon = {
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Vercel : <SiVercel/>,
        Css : <TbBrandCss3 />,
        Html : <FaHtml5 />,
        Tailwind : <SiTailwindcss />,
        Firebase : <IoLogoFirebase />
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
