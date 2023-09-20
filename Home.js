import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import img1 from './i2.jpg';

function Home() {

  const ourStoryText =
    "Since 1995, Restaurant Name has been serving exquisite dishes inspired by local flavors and international cuisine. Our journey is marked by a passion for food and a commitment to providing unforgettable dining experiences.";
  const customerReviews = [
    {
      name: "John Doe",
      rating: 5,
      review: "Amazing food and fantastic service! I'll definitely be back."
    },
    {
      name: "Jane Smith",
      rating: 4,
      review: "Great ambiance and delicious dishes. Highly recommended!"
    }
  ];

  const featuredDishes = [
    {
      name: "Signature Dish",
      description: "A culinary masterpiece featuring a perfect blend of flavors and textures.",
      image: "dish1.jpg"
    },
    {
      name: "American Delight",
      description: "Freshly caught seafood, expertly prepared to satisfy your cravings.",
      image: "dish2.jpg"
    }
  ];

  return (
    <div className="home">
      <motion.header
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <h1>Welcome to <span className="restaurant-name">The Flavorsome Haven </span></h1>
          <p>Discover a world of culinary delight.</p>
          <a href="#menu" className="btn-primary">
            Explore more
          </a>
        </div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
        </motion.div>
      </motion.header>

      <section className="our-story">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Our Story
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {ourStoryText}; Certainly! Here's a fictional story for your restaurant:
Once upon a time in a charming corner of the  It was no ordinary eatery; it was a place where culinary dreams came to life, and where every dish had a story to tell.

The story of The Flavorsome Haven began with its passionate founder, Chef Victor. Victor was a maestro in the art of cuisine, and his love for cooking was matched only by his desire to create a haven for food enthusiasts. He believed that each dish should be a unique experience, a symphony of tastes and textures that would transport diners to distant lands.

The restaurant was tucked away in a historic building, its interior adorned with rustic charm and warm, welcoming colors. As you entered, the aroma of freshly baked bread and simmering sauces enveloped you, instantly making you feel at home.

The heart of The Flavorsome Haven was its kitchen, a bustling hub of creativity and innovation. Here, Chef Victor and his team experimented tirelessly, blending flavors from around the world to craft a menu that was a gastronomic journey in itself. 

One of the most cherished dishes on the menu was the "Mediterranean Symphony." It featured tender lamb, slow-cooked to perfection, paired with fragrant rosemary and roasted vegetables. Each bite was a taste of the Mediterranean coastline, where the sea breeze danced with the aroma of herbs and spices.

Another highlight was the "Oriental Euphoria," a vegetarian delight that combined the crunch of fresh vegetables with the silkiness of homemade peanut sauce. It was a harmonious fusion of textures and tastes that transported diners to bustling Asian markets.

But The Flavorsome Haven wasn't just about exquisite dishes; it was a place where memories were made. Couples celebrated anniversaries with candlelit dinners, friends gathered for lively brunches, and families created traditions with Sunday feasts.

As the years passed, The Flavorsome Haven's reputation grew far and wide. It became a destination for food critics and a beloved spot for locals. Chef Victor's dedication to culinary excellence remained unwavering, and he continued to surprise and delight with seasonal specials and innovative twists on classic favorites.

The restaurant's story was one of passion, creativity, and the joy of sharing exceptional food with kindred spirits. It was a story that unfolded with every sizzling pan, every garnish carefully placed, and every smile on a satisfied diner's face.

And so, "The Flavorsome Haven" became more than just a restaurant;it became a chapter in the culinary history of the city, a place where food was an art form, and every meal was a tale to savor and cherish.
        </motion.p>
        <button className='button'>View More </button>
      </section>

      <section className="customer-reviews">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Customer Reviews
        </motion.h2>
        {customerReviews.map((review, index) => (
          <div className="review" key={index}>
            <motion.div
              className="review-avatar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
            </motion.div>
            <motion.div
              className="review-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3>{review.name}</h3>
              <div className="rating">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p>{review.review}</p>
            </motion.div>
          </div>
        ))}
      </section>

      <section className="customer-ratings">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Customer Ratings
        </motion.h2>
        <div className="average-rating">
          Average Rating: 4.5
          <div className="rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>
      </section>
      <section className="dish-details">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Featured Dishes
        </motion.h2>
        {featuredDishes.map((dish, index) => (
          <div className="featured-dish" key={index}>
            <motion.div
              className="dish-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img src={img1} alt={dish.name} />
            </motion.div>
            <motion.div
              className="dish-details-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
            </motion.div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;