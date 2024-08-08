import React from 'react';
import './Project.css';
import ScrollAnimation from "react-animate-on-scroll";

const lists = [
  {
    title: 'Coming Soon',
    description: '...',
    topic: ['...', '...', '...']
  },
  {
    title: 'Coming Soon',
    description: '...',
    topic: ['...', '...', '...']
  },
  {
    title: 'Coming Soon',
    description: '...',
    topic: ['...', '...', '...']
  }
];

const Project = () => {
  return (
    <div id="projects">
      <h2>My Projects</h2><br></br>
      <div className="project">
        {
          lists.map((list, index) => 
            <ScrollAnimation key={index} animateIn="flipInX">
              <div className="box">
                <header>
                  <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <title>Folder</title>
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <div className="project-links">
                    No Project Here
                  </div>
                </header>
                <div className="body">
                  <h3>{list.title}</h3>
                  <p>{list.description}</p>
                </div>
                <footer>
                  <ul className="tech-list">
                    {
                      list.topic.map((topic, topicIndex) => <li key={topicIndex}>{topic}</li>)
                    }
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

export default Project;