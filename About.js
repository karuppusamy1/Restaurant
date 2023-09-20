import React from 'react';
import './About.css'; 
import Img from './bg.jpg'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={Img} alt="Restaurant Interior" />
      </div>
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Welcome to our restaurant! We are passionate about serving
          delicious food and providing a memorable dining experience. Our
          chefs use the finest ingredients to create mouthwatering dishes
          that will tantalize your taste buds.
        </p>
        <p>
          Whether you're looking for a cozy date night spot or a place to
          celebrate a special occasion, our restaurant is the perfect
          choice. We take pride in our warm and inviting atmosphere, making
          every visit a delightful one.
        </p>
        <p>
         where we are passionate about serving
        delicious food in a warm and welcoming environment. Our commitment to
        quality and customer satisfaction has made us a beloved dining
        destination in the community.Our journey began over a decade ago with a simple idea: to create a
        place where people could enjoy outstanding cuisine while feeling right
        at home. Since then, we've been dedicated to crafting memorable dining
        experiences for our guests.
        </p>
        <p>
        Our menu is a celebration of flavors from around the world. Each dish
        is thoughtfully prepared by our talented chefs using the finest
        ingredients. From mouthwatering appetizers to delectable main courses
        and indulgent desserts, our menu is designed to satisfy every palate Behind every delicious meal is a team of dedicated individuals who are
        passionate about their craft. Our chefs, servers, and staff work
        tirelessly to ensure that your dining experience is nothing short of
        exceptional.
        </p>
        <button className='button'>View More</button>
      </div>
    </div>
  );
};

export default About;