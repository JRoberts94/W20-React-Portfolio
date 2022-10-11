import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import css from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <BaseLayout>
      <section className={css.hero}>
        <div className={css.projectCards}>
          <h1 class="text-center">Portfolio</h1>
          <div class="row row-cols-1 row-cols-sm-2 g-3">
            <div class="col">
              <div className={css.cardSpacing} class="card">
                <img
                  src={require("../../src/pages/screenshots/screenshot.png")}
                  alt="PayUp invoice generator deployed"
                  class="card-img-top"
                ></img>
                <div class="card-body">
                  <h5 class="card-title">PayUp! Invoice Generator</h5>
                  <p class="card-text">
                    This Group Project Idea Was To Create An App That Easily
                    Generates An Invoice For A Business To Bill To Their
                    Clients, With Simple A GUI
                  </p>
                  <a href="https://github.com/Navneet-Birdi/Payup-Invoice-Maker">
                    
                    <img
                      src={require("../../src/pages/icons/GitHubIcon.png")}
                      alt="github icon"
                      height="50px"
                    ></img>
                  </a>
                  <a href="https://payup-invoice-gen.herokuapp.com/">
                    
                    <img
                      src={require("../../src/pages/icons/DeployedIcon.jpeg")}
                      alt="deployed icon"
                      height="50px"
                    ></img>
                  </a>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <img
                  src={require("../../src/pages/screenshots/screenshotresized.PNG")}
                  alt="Random Video Game Generator"
                  class="card-img-top"
                ></img>
                <div class="card-body">
                  <h5 class="card-title">Random Video Game Generator</h5>
                  <p class="card-text">
                    My First Group Project, We Decided To Create A Random Video
                    Game Selector For When The Users Cant Decide For Themselves
                    What To Play.
                  </p>
                  <a href="https://github.com/Beefs4000/Random-Videogame-Selector">
                    
                    <img
                      src={require("../../src/pages/icons/GitHubIcon.png")}
                      alt="github icon"
                      height="50px"
                    ></img>
                  </a>
                  <a href="https://beefs4000.github.io/Random-Videogame-Selector/">
                    <img
                      src={require("../../src/pages/icons/DeployedIcon.jpeg")}
                      alt="deployed icon"
                      height="50px"
                    ></img>
                  </a>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <img
                  src={require("../../src/pages/screenshots/week3screenshot.PNG")}
                  alt="password generator deployed"
                  class="card-img-top"
                ></img>
                <div class="card-body">
                  <h5 class="card-title">Password Generator</h5>
                  <p class="card-text">
                    This Project Of Mine Was To Create A Random Secure Password
                    Generator To Include Symbols, Numbers And Alphabetical
                    Characters.
                  </p>
                  <a href="https://github.com/JRoberts94/week3-PasswordGenerator">
                    
                    <img
                      src={require("../../src/pages/icons/GitHubIcon.png")}
                      alt="github icon"
                      height="50px"
                    ></img>
                  </a>
                  <a href="https://jroberts94.github.io/week3-PasswordGenerator/">
                    
                    <img
                      src={require("../../src/pages/icons/DeployedIcon.jpeg")}
                      alt="deployed icon"
                      height="50px"
                    ></img>
                  </a>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <img
                  src={require("../../src/pages/screenshots/w19screenshot.PNG")}
                  alt="JATE text editor deployed"
                  class="card-img-top"
                ></img>
                <div class="card-body">
                  <h5 class="card-title">JATE - Just Another Text Editor</h5>
                  <p class="card-text">
                    This Project Was to Create JATE, To Be Able To Save and
                    Store Previous Text Inputs For Later Use, It Is Also An
                    Installable Client.
                  </p>
                  <a href="https://github.com/JRoberts94/W19-PWA--Text-Editor">
                    
                    <img
                      src={require("../../src/pages/icons/GitHubIcon.png")}
                      alt="github icon"
                      height="50px"
                    ></img>
                  </a>
                  <a href="https://w19-jate-text-editor.herokuapp.com/">
                    
                    <img
                      src={require("../../src/pages/icons/DeployedIcon.jpeg")}
                      alt="deployed icon"
                      height="50px"
                    ></img>
                  </a>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <img
                  src={require("../../src/pages/screenshots/week9screenshot.PNG")}
                  alt="Professional README Generator"
                  class="card-img-top"
                ></img>
                <div class="card-body">
                  <h5 class="card-title">Professional README Generator</h5>
                  <p class="card-text">
                    this Project I created a README file Generator using
                    node.js, as a way to save time creating a one scratch
                    everytime for every assignment/ project for future use.
                  </p>
                  <a href="https://github.com/JRoberts94/week9-Professional-README-generator">
                    <img
                      src={require("../../src/pages/icons/GitHubIcon.png")}
                      alt="github icon"
                      height="50px"
                    ></img>
                  </a>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <img
                  src={require("../../src/pages/screenshots/week12screenshot.PNG")}
                  alt="Employee Tracker App"
                  class="card-img-top"
                ></img>
                <div class="card-body">
                  <h5 class="card-title">Employee Tracker App</h5>
                  <p class="card-text">
                    This Project Is A Command Console Prompt Application For A
                    Company/ Business To Create A Console Table/ Database To
                    Keep Information On Their Employees, Departments and their
                    Job Roles.
                  </p>
                  <a href="https://github.com/JRoberts94/Week12-Employee-Tracker">
                    <img
                      src={require("../../src/pages/icons/GitHubIcon.png")}
                      alt="github icon"
                      height="50px"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
