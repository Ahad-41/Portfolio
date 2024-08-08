import React from 'react';
import './Achievements.css';
import ScrollAnimation from "react-animate-on-scroll";

import BUET_IUPC_2023 from './assets/BUET IUPC 2023.jpg';
import CUET_IUPC_2024 from './assets/CUET IUPC 2024.jpg';
import NCPC_2023 from './assets/NCPC 2023.jpg';

const lists = [
  {
    name: 'BUET Inter University Programming Contest 2023',
    date: 'July 29, 2023',
    team: 'FirstStep',
    rank: 'Rank : 38/100',
    standing:'https://toph.co/c/buet-inter-university-2023/standings',
    image: { src: BUET_IUPC_2023, alt: 'BUET IUPC 2023' }
  },
  {
    name: 'CUET Inter University Programming Contest 2024',
    date: 'January 26, 2024',
    team: 'BU_Phantoms',
    rank: 'Rank : 73/100',
    standing:'https://toph.co/c/cuet-inter-university-codestorm-1-0/standings',
    image: { src: CUET_IUPC_2024, alt: 'CUET IUPC 2024' }
  },
  {
    name: 'National Collegiate Programming Contest NCPC 2023',
    date: 'March 9, 2024',
    team: 'Target Ad-hoc',
    rank: 'Rank : 96/196',
    standing:'https://bapsoj.org/contests/ncpc-onsite-2023-hosted-by-ju/standings',
    image: { src: NCPC_2023, alt: 'NCPC 2023' }
  }
];

const Achievements = () => {
  return (
    <div id="achievements">
      <h2>Achievements</h2><br />
      <div className="achievement">
        {
          lists.map((list, index) => 
            <ScrollAnimation animateIn="flipInX" key={index}>
              <div className="box">
                <header>
                  <img src={list.image.src} alt={list.image.alt} />
                </header>

                <div className="body">
                  <h3>{list.name}</h3>
                  <p>{list.rank}</p>
                </div>

                <footer>
                  <ul className="achieve-list">
                    <li>{list.date}</li>
                    <li>{list.team}</li>
                    <li className='button'><a href={list.standing} target="_blank" rel="noreferrer">Standing</a></li>
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

export default Achievements;