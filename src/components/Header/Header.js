import React from 'react';
import './Header.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';

const lists = [
  {
    title: 'Home',
    id: 'home'
  },
  {
    title: 'Skills',
    id: 'skills'
  },
  {
    title: 'Education',
    id: 'education'
  },
  {
    title: 'Achievements',
    id: 'achievements'
  },
  {
    title: 'Problem Solving',
    id: 'problemSolving'
  },
  {
    title: 'Experiences',
    id: 'experiences'
  },  
  {
    title: 'Projects',
    id: 'projects'
  },
  {
    title: 'Contact',
    id: 'contact'
  }
];

const Header = () => {
  const [active, setActive] = useState(false);
  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0];
    html.classList.toggle('light');
  }
  function closeMenu() {
    setActive(false);
  }
  return (
    <div className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">MD AHAD</HashLink>
        <nav className={active ? 'active' : ''}>
          {
            lists.map((list, index) => <NavHashLink key={index} smooth to={'#'+list.id} onClick={closeMenu}>{list.title}</NavHashLink>)
          }
        </nav>

        <div>
          <input
            onChange={toggleTheme}
            className="container_toggle"
            type="checkbox"
            id="switch"
            name="mode"
          />
          <label htmlFor="switch"></label>
        </div>

        <div
          aria-expanded={active ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={active ? 'Fechar menu' : 'Abrir menu'}
          className={active ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!active)
          }}
        ></div>
      </Router>
    </div>
  );
};

export default Header;