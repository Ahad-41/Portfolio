import React from 'react';
import './Skills.css';
import ScrollAnimation from "react-animate-on-scroll";

import Coding from "./assets/Coding.png";
import C from "./assets/C.png";
import CPlus from "./assets/C++.png";
import Java from "./assets/Java.png";
import HTML from "./assets/HTML.png";
import CSS from "./assets/CSS.png";
import Bootstrap from "./assets/Bootstrap.png";
import TailwindCSS from "./assets/TailwindCSS.png";
import Typescript from "./assets/Typescript.png";
import Javascript from "./assets/Javascript.png";
import ReactJS from "./assets/ReactJS.png";
import Node from "./assets/NodeJS.png";
import Express from "./assets/Express JS.png";
import SQL from "./assets/SQL.png";
import MongoDB from "./assets/MongoDB.png";
import Git from './assets/Git.png';
import Github from './assets/Github.png';
import VSCode from './assets/VSCode.png';
import MSOffice from './assets/MSOffice.png';

const items = [
  {
    type: 'Languages',
    image: [
      { src: C, alt: 'C' },
      { src: CPlus, alt: 'C++' },
      { src: Java, alt: 'Java' },
      { src: Javascript, alt: 'JavaScript' }
    ]
  },
  {
    type: 'Frontend',
    image: [
      { src: HTML, alt: 'HTML' },
      { src: CSS, alt: 'CSS' },
      { src: ReactJS, alt: 'ReactJS' },
      { src: Bootstrap, alt: 'Bootstrap' },
      { src: TailwindCSS, alt: 'TailwindCSS' },
      { src: Typescript, alt: 'Typescript' }
    ]
  },
  {
    type: 'Backend',
    image: [
      { src: Node, alt: 'Node' },
      { src: Express, alt: 'Express' }
    ]
  },
  {
    type: 'Database',
    image: [
      { src: SQL, alt: 'SQL' },
      { src: MongoDB, alt: 'MongoDB' }
    ]
  },
  {
    type: 'Tools',
    image: [
      { src: Git, alt: 'Git' },
      { src: Github, alt: 'Github' },
      { src: VSCode, alt: 'VSCode' },
      { src: MSOffice, alt: 'MSOffice' }
    ]
  }
];

const Skills = () => {
  return (
    <div id='skills'>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInLeft" delay={0.20 * 1000}>
          <img src={Coding} alt="Coding" />
        </ScrollAnimation>
      </div>
    	
      <div>
        <ScrollAnimation animateIn="fadeInRight">
          <h2>Skills</h2>
        </ScrollAnimation>

        {
          items.map((item, index) => 
            <div key={index}>
              <ScrollAnimation animateIn="fadeInRight" delay={0.4 * 1000}>
                <h3>{item.type+':'}</h3>
              </ScrollAnimation>

              <div className="hard-skills">
                {
                  item.image.map((image, imgIndex) =>
                    <div className="hability" key={imgIndex}>
                      <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                        <img src={image.src} alt={image.alt} />
                      </ScrollAnimation>
                    </div>
                  )
                }
              </div><br />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Skills;