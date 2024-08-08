import React from 'react';
import './ProblemSolving.css';
import ScrollAnimation from "react-animate-on-scroll";

import Codeforces from './assets/Codeforces.png';
import Codechef from './assets/Codechef.png';
import CP from './assets/CP.jpg';

const lists = [
  {
    handle: 'Nocturnality',
    rating: 'Expert',
    extra: 'Highest Rating: 1649',
    idLink:'https://codeforces.com/profile/Nocturnality',
    image: { src: Codeforces, alt: 'Codeforces' }
  },
  {
    handle: 'ahad_42',
    rating: '3* / Blue',
    extra: 'Highest Rating: 1697',
    idLink:'https://www.codechef.com/users/ahad_42',
    image: { src: Codechef, alt: 'Codechef' }
  },
  {
    handle: 'Link',
    rating: '2500+ Problems Solved',
    extra: 'Competitive Programming Problems (Algorithmic, Data Structure Based and Others)',
    idLink:'https://github.com/Ahad-41/Competitive-Programming',
    image: { src: CP, alt: 'CP' }
  }
];

const ProblemSolving = () => {
  return (
    <div id="problemSolving">
      <h2>Problem  Solving  Activities</h2><br />
      <div className="judge">
        {
          lists.map((list, index) => 
            <ScrollAnimation animateIn="flipInX" key={index}>
              <div className="box">
                <header>
                  <img src={list.image.src} alt={list.image.alt} />
                </header>

                <div className="body">
                  <h3>{list.rating}</h3>
                  <p>{list.extra}</p>
                </div>

                <footer>
                  <ul className="achieve-list">
                    <li className='button'><a href={list.idLink} target="_blank" rel="noreferrer">{list.handle}</a></li>
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

export default ProblemSolving;