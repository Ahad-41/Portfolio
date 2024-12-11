import React from 'react';
import './Achievements.css';
import ScrollAnimation from "react-animate-on-scroll";

import BUET_IUPC_2023 from './assets/BUET IUPC 2023.jpg';
import CUET_IUPC_2024 from './assets/CUET IUPC 2024.jpg';
import NCPC_2023 from './assets/NCPC 2023.jpg';
import BUET_IUPC_2024 from './assets/BUET IUPC 2024.jpg';
import PSTU_IUPC_2024 from'./assets/PSTU IUPC 2024.jpg';
import ICPC_2024 from './assets/ICPC 2024.jpg';

const lists = [
  {
    name: 'PSTU IT Carnival Programming Contest 2024 (South Zone - Individual)',
    date: 'November 30, 2024',
    rank: 'Rank : 12/101',
    standing:'https://toph.co/c/pstu-it-carnival-2024-south-zone/standings',
    image: { src: PSTU_IUPC_2024, alt: 'PSTU IUPC 2024' }
  },
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
    date: 'March 09, 2024',
    team: 'Target Ad-hoc',
    rank: 'Rank : 96/196',
    standing:'https://bapsoj.org/contests/ncpc-onsite-2023-hosted-by-ju/standings',
    image: { src: NCPC_2023, alt: 'NCPC 2023' }
  },
  {
    name: 'BUET Inter University Programming Contest 2024',
    date: 'November 01, 2024',
    team: 'BU_Phantoms',
    rank: 'Rank : 106/113',
    standing:'https://toph.co/c/inter-university-buet-cse-fest-2024/standings',
    image: { src: BUET_IUPC_2024, alt: 'BUET IUPC 2024' }
  },
  {
    name: 'ICPC Asia Dhaka Regional Contest Onsite 2024',
    date: 'December 07, 2024',
    team: 'BU_Phantoms',
    rank: 'Rank : 211/309',
    standing:'https://bapsoj.org/contests/icpc-asia-dhaka-regional-contest-2024-onsite-round/standings',
    image: { src: ICPC_2024, alt: 'ICPC 2024' }
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