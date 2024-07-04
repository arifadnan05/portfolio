import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Arif Adnan</h4>
      <h4>Copyright &copy; 2024 AR</h4>
      <div className='footerLinks'>
        <a href="https://github.com/arifadnan05" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/arifadnan05/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href='mailTo:arifahamedadnan@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer