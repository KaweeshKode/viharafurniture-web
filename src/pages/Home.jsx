import React from 'react';
import Hero from '../components/Hero';
import DreamFurniture from '../components/DreamFurniture';
import Designing from '../components/Designing';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <DreamFurniture />
      <Designing />
      <Testimonials />
    </div>
  );
};

export default Home;
