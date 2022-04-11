import React from 'react'
import './about.css'
import ME from '../../assets/08-20-21 tyler and kaia  (259).jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          

          <p>
          Full stack engineer specializing in front-end web development with a creative eye when it comes to design and user interaction. 
          <br/>
          <br/>
          I proudly hold titles of husband and dog daddy. When I'm not behind the computer screen I enjoy traveling, hiking, live music, and eating exotic foods. (Or eating any food for that matter) 
          <br/>
          <br/>
          As a fresh graduate from the University of Minnesota full stack flex bootcamp, I am currently seeking my first career opportunity and I am eager to find my place in the world of tech.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About