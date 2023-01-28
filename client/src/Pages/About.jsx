import React from 'react'
import { Link } from 'react-router-dom';
import '../PagesCss/About.css'

const About = () => {
  return (
    <div class="aboutPage hide" id="aboutPage">
        <div class="aboutContainer">
            <div class="text_box">
                <h1>All About The Stack Over Flow</h1>
                <p></p>
                <Link to='/'><a href="" class="backToHm" id="backToHomePage">Back To Home</a></Link>
                <p>STACK OVER FLOW CLONE @ <span style={{fontWeight:"bold"}}>PAWAN KUMAR YADAV</span></p>
            </div>

        </div>

    </div>
  )
}

export default About