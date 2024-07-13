import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/dev-akshaypatidar/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/github-akshaypatidar" target="_blank" rel="noreferrer" ><FaGithub /></a>
     
    </div>
  )
}

export default HeaderSocials