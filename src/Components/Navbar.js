import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {AiOutlineHome} from "react-icons/ai";
import {BsPerson, BsCodeSlash} from "react-icons/bs";
import {CgFileDocument} from "react-icons/cg";
import { MdOutlineContactSupport } from "react-icons/md";


const Nav = () => {
    const [navbarblur, setnavbarblur]=useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        } 
        else {
            setnavbarblur(false);
        }
    }

    var showMenu= ()=>{
        var bar=document.getElementsByClassName("bar");
        var ham=document.getElementsByClassName("NavbarLinks");
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");

        ham[0].classList.toggle("showNavbar");
    }

    var hideMenu = ()=>{
        var bar=document.getElementsByClassName("bar");
        var ham=document.getElementsByClassName("NavbarLinks");
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    }
    
    window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={navbarblur? 'Navbar blur':'Navbar'}> 
 
        <h1 title='Reload' onClick={()=>window.location.reload(true)} className='Logo'>AR</h1>

        <div className='Hamburger' onClick={showMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>

        <ul className='NavbarLinks'>
            <li onClick={hideMenu}><NavLink to="/"><AiOutlineHome/> Home</NavLink></li>
            <li onClick={hideMenu}><NavLink to="/About"><BsPerson/> About</NavLink></li>
            <li onClick={hideMenu}><NavLink to="/Project"><BsCodeSlash/> Project</NavLink></li>
            <li onClick={hideMenu}><NavLink to="/Resume"><CgFileDocument/> Resume</NavLink></li>
            <li onClick={hideMenu}><NavLink to="/Contact"><MdOutlineContactSupport /> Contact</NavLink></li>
        </ul>
        
    </nav>
  )
}

export default Nav