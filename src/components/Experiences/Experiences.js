import React from 'react';
import './Experiences.css';
import ScrollAnimation from "react-animate-on-scroll";

import Codeforces from './assets/Codeforces.png';

const lists = [
  {
    topic: 'Problem Setter',
    contest: 'Intra Department Programming Contest 2023, CSE-BU',
    link:'https://codeforces.com/contestInvitation/fa4a356e37997cfb8dfe717ba3106ad11eb693eb',
    image: { src: Codeforces, alt: 'Codeforces' }
  },
  {
    topic: 'Problem Setter',
    contest: 'Intra Department Programming Contest 2024, CSE-BU',
    link:'https://codeforces.com/contestInvitation/f17a2379be0d143d570d6725209a6b0c36647df9',
    image: { src: Codeforces, alt: 'Codeforces' }
  },
  {
    topic: 'Problem Setter',
    contest: 'Battle of Brains 2024, University of Barishal',
    link:'https://codeforces.com/contestInvitation/898ff3910e89d79abb797a8e2a7f214bba05a565',
    image: { src: Codeforces, alt: 'Codeforces' }
  }
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