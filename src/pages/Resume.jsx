import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import resume  from '../../src/assets/Resume2022.docx'
import downloadIcon from '../../src/pages/icons/DownloadIcon.png'
import css from "./Resume.module.css";


export default function Resume() {
  return (
    <BaseLayout>
    <section className={css.hero}>
      <div className={css.resumeCss} >
        <h1>Resume</h1>
        <h3>Some Of My Learnings Include:</h3>
        <ul className={css.list} >
          <li>React</li>
          <li>GraphQL/Apollo</li>
          <li>Progressive Web Applications</li>
          <li>NoSQL (MongoDB)</li>
          <li>MySQL</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>Sequalize ORM</li>
          <li>Serverside APIs</li>
          <li>Web Apis / Third-party APIs</li>
          <li>HTML/CSS/Javascript</li>
        </ul>


        <h3>Download my Resume</h3>
        <a href={resume} download>
          {" "}
          <button type="button" className="btn btn-outline-primary">
            {" "}
            <img
              src={downloadIcon}
              alt="download icon"
              width="20px"
              height="20px"
            />{" "}
            Download
          </button>{" "}
        </a>
      </div>
    </section>
    </BaseLayout>
  );
}
