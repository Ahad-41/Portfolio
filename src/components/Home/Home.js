import React from 'react';
import './Home.css';

import { BrowserRouter } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";
import Illustration from "./assets/Hello.png";

import Hello from './assets/Hello.gif';
import Linkedin from './assets/Linkedin.png';
import Github from './assets/Github.png';
import Facebook from './assets/Facebook.png';
import Whatsapp from './assets/Whatsapp.png';
import Telegram from './assets/Telegram.png';

const tools = [
  {
    name: 'Linkedin',
    link: 'https://www.Linkedin.com/in/ahad42',
    image: Linkedin
  },
  {
    name: 'Github',
    link: 'https://github.com/Ahad-41',
    image: Github
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=100086157695000',
    image: Facebook
  },
  {
    name: 'Whatsapp',
    link: 'https://api.Whatsapp.com/send/?phone=%2B8801701765255&text=Md+Ahad',
    image: Whatsapp
  },
  {
    name: 'Telegram',
    link: 'https://t.me/Ahad_041',
    image: Telegram
  }
]

const Home = () => {
  return (
    <div id='home'>
      <div className="home-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hey <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Md Ahad</h1>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Competitive Programmer</h3>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Expert (Blue) at Codeforces | NCPC Finalist | Solved 2500+ problems on various online judges</p>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            {
              tools.map((tool, index) =>
                <a
                  key={index}
                  href={tool.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={tool.image} alt={tool.name} />
                </a>
              )
            }
          </div>
        </ScrollAnimation>
      </div>

      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Illustration" />
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Home;