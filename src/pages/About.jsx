import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import css from "./About.module.css";



export default function About() {

  return (
    <BaseLayout>
      <section className={css.hero}>
        <div className={css.aboutCss}>
          <h5>Hi my name is</h5>
          <img
            src={require("../../src/images/jakeroberts.jpg")}
            alt="author"
          ></img>
          <h2>Jake Roberts</h2>
          <p>
            I am a full stack developer who is going to continue to grow and
            thrive in this industry.
            <br></br>
            Over the past 6 months I have learnt many new front/back end
            technologies. I have thoroughly
            <br></br>
            enjoyed learning in the fullstack web developer course and I'm
            excited to display my new skills.
          </p>
          <h1>About Me</h1>
            <br></br>
            <p>I am a 28 year old underground miner in the FIFO mining industry, Ive been working with my hands and doing manual labour since I finished high school over 11 years ago.</p>
            <p>So i know what it means to work hard physically, and learning to code has taught me how to work hard mentally</p>
            <br></br>
            <p>My family heritage is South African, My Mother growing up in Johannesburg, and my Father growing up in Cape Town.</p>
            <p>As for myself, I was born right here in Perth, Western Australia.</p>
            <br></br>
            <p>As an aspiring Professional coder, I am investing all of my spare time between my classes, work and study into learning more and more about coding.</p>
            <p>I'm aiming to one day land a fulltime Job in web development and further my career in the industry as a leading professional.</p>
            <p>But for the time being due to my current work and swings, ill be aiming for a casual or part time role, to continue growing my knowledge and skills in the field.</p>
            <br></br>
          {/* <a href="https://github.com/JRoberts94?tab=repositories">
                    {" "}
                    <img
                      src={require("../../src/pages/icons/GitHubIcon.png")}
                      alt="github icon"
                      height="50px"
                    ></img>{" "}
                  </a>
                  <a href="https://www.linkedin.com/in/jake-roberts94/">
                    {" "}
                    <img
                      src={require("../../src/pages/icons/LinkedInIcon.png")}
                      alt="LinkedIn icon"
                      height="50px"
                    ></img>{" "}
                  </a> */}
        </div>
      </section>
    </BaseLayout>
  );
}
