import React from 'react'
import { Link } from "react-router-dom";
import Nav from '../Utilities/Nav'
import { FaMapSigns, FaGraduationCap, FaBriefcase, FaLightbulb} from "react-icons/fa";

const AboutEve = () => {
  return (
    <>
    <Nav />			
      <div className='about-heading'>
        <h3>Hello...</h3>
        <h4>My Name is <span className='bold'>Eve</span> </h4>
      </div>

      <div id='about-me-body'>
        <div>
          <h5>My Journey as a <span className='bold'>Front-End Developer</span></h5>
          <p>
            Now that I have completed my academic studies, I am eager to take my front-end development skills to the next 
            level in a professional environment. Throughout my studies, I specialized in Web, Mobile and Cloud technologies. 
          </p>
          <p>  
            This basis of education, has provided me with a comprehensive understanding of front end development, as well as accessibility and user centered design 
            principles. I am enthusiastic about the begin to use these skills on real-world projects, and I am committed to continuous 
            learning and development as a front-end developer.
          </p>
        </div>
        <FaMapSigns className='about-icon'/>
        <FaGraduationCap className='about-icon'/>
        <div>
          <h5>My <span className='bold'>Education</span></h5>
          <p>
            My studies through the Open University have equipped me with a range of transferable skills, including 
            problem-solving, personal accountability, reliability, and time management. Through independent learning 
            and collaboration with peers, I have honed these skills and tailored my learning to my strengths.
          </p>
          <p> I am proud to have earned a BSc with Honours in Computing, IT, and Design, but I recognize that learning 
            never truly ends. That's why I have continued to develop my skills by learning new frameworks, libraries, and 
            languages.
          </p>
        </div>

        <div>
          <h5>My <span className='bold'>Experience</span></h5>
          <p>
            I have also completed volunteer developer as well as some freelance work creating a B2B company website for 
            <a classname='text-link' href='https://wadebuildingservices.co.uk/'>Wade Building Services</a>. 
          </p>
          <p>This valuble experience 
            required me to work closely with the sales department to establish the branding and the technical department 
            to ensure functionality, which gave me valuable experience in managing multiple stakeholders throughout a project.
          </p>
        </div>
        <FaBriefcase className='about-icon'/>
        <FaLightbulb className='about-icon'/>
        <div>
          <h5>My <span className='bold'>Ethos</span></h5>
          <p>
            To me, design and functionality are equally important when it comes to creating successful and enjoyable websites. That's why 
            I strive to develop websites that are visually appealing, user-friendly and accessible. I am committed to continuously improving
            my skills and staying up-to-date with the latest industry trends and technologies.
          </p>
          <p>
            If you're searching for a passionate front-end web developer who excels in creating great user experiences with 
            React, look no further. Please don't hesitate to <Link to='/ContactMe'className='text-link'>Contact Me</Link> to 
            learn more about my work and experience or recieve a copy of my full CV. I'm always happy to chat and eager 
            to hear from you!
          </p>
        </div>

      </div>

      <div className='about-website-body'>
        <h3>This <span className='bold'>Website</span></h3>
        <div>
          <h4>Bulding Blocks</h4>
          <p>Like any website, this website is constructed using the fundamental building blocks of HTML, CSS, and JavaScript. 
            This website goes beyond these basics and is built using the popular React framework, allowing for efficient 
            and dynamic development.  </p>
          <p>In addition, it is then hosted on GitHub pages, making the <a classname='text-link' href='https://github.com/Eve-Drake/Portfolio'>code</a> avaliable to view at any time</p>
        </div>
        
        
        <div>
          <h4>Features</h4>
          <p>
            This website showcases my skills in front-end web development through two apps - a <Link to='/ShoppingList'className='text-link'>Shopping List Application</Link>  and a 
            <Link to='/ReadingList'> Reading List Application</Link>. You can find more information about these apps on their respective pages.
          </p>
          <p>
            If you're interested in seeing more of my projects or checking out my code, feel free to visit my  
            <a classname='text-link' href='https://github.com/Eve-Drake'> GitHub</a> profile.
          </p>
        </div>
      </div>
      
  </>
  )
}

export default AboutEve