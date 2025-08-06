import React from 'react';
import { createRoot } from 'react-dom/client';
import { animals } from './animals';

const container = document.getElementById('app');
const root = createRoot(container);

const background = (<img className="background" alt="ocean" src="/images/ocean.jpg" />)

const title = '';

const images = [];
for(const animal in animals) {
  const image = (
    <img
      onClick={displayFact}
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
    />
  );

  images.push(image);
  }
const showBackground = true;
const animalFacts = (
  <div>
    <h1>{title || 'Click an animal for a fun fact'}</h1>
    <p id='fact'></p>
    {showBackground && background}
    <div className='animals'>{images}</div>
  </div>
  );

function displayFact(e) {
  const animal = e.target.alt;
  const index = Math.floor(Math.random() * animals[animal].facts.length);
  const funFact = animals[animal].facts[index];
  const p = document.getElementById('fact');
  p.innerHTML = funFact;
};

root.render(animalFacts);