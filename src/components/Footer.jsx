import React from "react";
import githubIcon from "../../src/pages/icons/GitHubIcon.png"
import linkedinIcon from "../../src/pages/icons/LinkedInIcon.png"
import './Footer.css'

function Footer(){
    return (
        <footer class="footer">
            <h5>Find me @: </h5>
            <a href="https://github.com/JRoberts94?tab=repositories"> <img src={githubIcon} alt="github icon" class="socials" /> </a>
            <a href="https://www.linkedin.com/in/jake-roberts94/"> <img src={linkedinIcon} alt="linkedin icon" class="socials"/> </a>
        </footer>
          
    );
}

export default Footer;