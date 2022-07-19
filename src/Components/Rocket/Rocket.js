import React, { useState } from 'react';
import RocketList from './RocketList';
import rocket from './rocket.jpg';
import './Rocket.css';

const Rocket = () => {
  const [rockets] = useState([
    {
      id: 1,
      name: 'Falcon 1',
      description: 'The Falcom Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      images: rocket,
    },
    {
      id: 2,
      name: 'Falcon 2',
      description: 'The tinj huf Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      images: rocket,
    },
    {
      id: 3,
      name: 'Falcon 3',
      description: 'in Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      images: rocket,
    },
  ]);

  return (
    <div>
      <RocketList rockets={rockets} />
    </div>
  );
};

export default Rocket;
