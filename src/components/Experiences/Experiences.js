import React from 'react';
import './Experiences.css';
import ScrollAnimation from "react-animate-on-scroll";

import Codeforces from './assets/Codeforces.png';

const lists = [
  {
    topic: 'Problem Setter',
    contest: 'Intra Department Programming Contest 2023, CSE-BU',
    date: 'November 2021',
    link:'https://codeforces.com/contestInvitation/fa4a356e37997cfb8dfe717ba3106ad11eb693eb',
    image: { src: Codeforces, alt: 'Codeforces' }
  },
];

const Experiences = () => {
  return (
    <div id="experiences">
      <h2>Experiences</h2><br />
      <div className="experience">
        {
          lists.map((list, index) => 
            <ScrollAnimation animateIn="flipInX" key={index}>
              <div className="box">
                <header>
                  <img src={list.image.src} alt={list.image.alt} />
                </header>

                <div className="body">
                  <h3>{list.topic}</h3>
                  <p>{list.contest}</p>
                </div>

                <footer>
                  <ul className="achieve-list">
                    <li className='button'><a href={list.link} target="_blank" rel="noreferrer">Contest Link</a></li>
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

export default Experiences;