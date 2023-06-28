import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Heading from '../components/Heading';
import Works from '../components/Works';

/**
 * Home page
 * @returns Home page
 */

const Home = () => (
  <div
    style={{
      margin: '2em',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8rem',
    }}
  >
    <Heading />
    <Works />
    <About />
    <Contact />
  </div>
);

export default Home;
