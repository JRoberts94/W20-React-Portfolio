import React from "react";
import githubIcon from "../../src/pages/icons/GitHubIcon.png"
import linkedinIcon from "../../src/pages/icons/LinkedInIcon.png"
import stackOverflowIcon from "../../src/pages/icons/stackOverflow.png"
import './Footer.css'

function Footer(){
    return (
        <footer class="footer">
            <h5>Find me @: </h5>
            <a href="https://github.com/JRoberts94?tab=repositories"> <img src={githubIcon} alt="github icon" class="socials" /> </a>
            <a href="https://www.linkedin.com/in/jake-roberts94/"> <img src={linkedinIcon} alt="linkedin icon" class="socials"/> </a>
            <a href="https://stackoverflow.com/users/19023652/jroberts94"> <img src={stackOverflowIcon} alt="stackOverflow icon" class="socials"/> </a>
        </footer>
          
    );
}

export default Footer;