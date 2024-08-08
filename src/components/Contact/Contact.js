import React from 'react';
import './Contact.css';

import Email from "./assets/Email.png";
import Phone from "./assets/Phone.png";

const lists = [
  {
    name: 'Email',
    to: 'ahad.cse8.bu@gmail.com',
    image: Email,
    link: 'mailto:ahad.cse8.bu@gmail.com'
  },
  {
    name: 'Phone',
    to: '+8801701765255',
    image: Phone,
    link: 'tel:+8801701765255'
  }
]

const Contact = () => {
  return(
    <div id="contact">
      <header><h2>Contact</h2><br /></header>
      <div className="contacts">
        {
          lists.map((list, index) =>
            <div key={index}>
              <a href={list.link}><img src={list.image} alt={list.name} /></a> 
              <a href={list.link}>{list.to}</a>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Contact;