import React from 'react'
import BaseLayout from '../layouts/BaseLayout'
import './About.css'

export default function About(){
      return (
          <BaseLayout>
        
        <div class="text-center">
          <h5>Hi my name is</h5>
          <img src={require('../../src/images/jakeroberts.jpg')} alt='author'  class="about-style"></img> 
          <h2>Jake Roberts</h2>
          <p>
            I am a full stack developer who is going to continue to grow and thrive in this industry. 
            <br></br>
            Over the past 6 months I have learnt many new front/back end technologies. I have thoroughly
            <br></br>
            enjoyed learning in the fullstack web developer course and I'm excited to display my new skills.
          </p>
        </div>
      
        </BaseLayout>
    )
}