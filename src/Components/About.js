import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Arif from '../images/arif.png'
import { FaBitcoin } from 'react-icons/fa';
import { GiArtificialIntelligence } from "react-icons/gi";
import { DiLinux } from 'react-icons/di';
import trading from '../images/trading.png'
import blockchain from '../images/blockchain.png'
import cyberSecurity from '../images/cyber-security.png'
const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Arif Adnan</b> and I am from Rangpur, Bangladesh.
            I'm a <b>Front End web developer.</b> And Degree first year bhurungamari govt collage. <br /><br /> I am a skilled front-end developer with a passion for crafting visually appealing and user-friendly web applications. I leverage my expertise in JavaScript, React, CSS, and HTML to deliver dynamic and responsive interfaces. <br /> <br /> Creating intuitive and user-friendly interfaces that meet both user needs and business goals. Implementing secure authentication and data protection protocols. Building responsive web applications that adapt flawlessly to various screen sizes.
          </p>
        </div>

        <div>
          <Tilt>
            <img className='Arif' src={Arif} alt="" />
          </Tilt>
        </div>

      </div>

      <h1 className='SkillsHeading'>Tech Stack</h1>
      <div className='skills'>

        <Skills skill='React' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Css' />
        <Skills skill='Html' />
        <Skills skill='Tailwind' />
        <Skills skill='Firebase' />

        <div className='main-interest'>
          <h1 className='SkillsHeading'>My Interest</h1>
          <div className='interest-flex'>
            <div className='interest'>
              <p className='interest-icon'><FaBitcoin /></p>
              <p>Crypto</p>
            </div>
            <div className='interest'>
              <img className='icon-image' src={blockchain} alt="" />
              <p>BlockChain</p>
            </div>
            <div className='interest'>
              <p className='interest-icon'><GiArtificialIntelligence /></p>
              <p>Ai</p>
            </div>
            <div className='interest'>
              <img className='icon-image' src={cyberSecurity} alt="" />
              <p>Cyber Security</p>
            </div>
            <div className='interest'>
              <p className='interest-icon'><DiLinux /></p>
              <p>Linux</p>
            </div>
            <div className='interest'>
              <img className='icon-image' src={trading} alt="" />
              <p>Trading</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About