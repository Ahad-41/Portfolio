import React from 'react';
import './Education.css';
import ScrollAnimation from "react-animate-on-scroll";

import university from './assets/University.png';
import college from './assets/College.png';
import school from './assets/School.jpg';

const lists = [
  {
    name: 'University of Barishal',
    degree: 'Bachelor of Science in Computer Science and Engineering',
    session: 'March 2022 - Present',
    location: 'Barishal, Bangladesh',
    website:'https://bu.ac.bd',
    image: { src: university, alt: 'University' }
  },
  {
    name: 'Govt. Barishal College',
    degree: 'Higher Secondary',
    session: 'July 2018 - March 2020',
    location: 'Barishal, Bangladesh',
    website:'http://www.gbc.gov.bd',
    image: { src: college, alt: 'College' }
  },
  {
    name: 'BN United High School',
    degree: 'Secondary',
    session: 'January 2013 - February 2018',
    location: 'Barguna, Bangladesh',
    website:'https://www.facebook.com/bibichinischool',
    image: { src: school, alt: 'School' }
  }
];

const Education = () => {
  return (
    <div id="education">
      <h2>Education</h2><br />
      <div className="educations">
        {
          lists.map((list, index) => 
            <ScrollAnimation animateIn="flipInX" key={index}>
              <div className="box">
                <header>
                  <a href={list.website} target="_blank" rel="noreferrer">
                    <img src={list.image.src} alt={list.image.alt} />
                  </a>
                </header>

                <div className="body">
                  <h3>{list.name}</h3>
                  <p>{list.degree}</p>
                </div>

                <footer>
                  <ul className="edu-list">
                    <li>{list.session}</li>
                    <br />
                    <li>{list.location}</li>
                  </ul>
                </footer>
              </div>
            </ScrollAnimation>
          )
        }
      </div>
    </div>
  );
};

export default Education;