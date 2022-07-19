import React from 'react';
import Button from 'react-bootstrap/Button';
import rocket from './rocket.jpg';
import './Rocket.css';

const rockets = [
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
];

const Rocket = () => (
  rockets.map((rocket) => (
    <>
      <div className="container-fluid d-flex my-3 mx-5" key={rocket.id}>
        <img src={rocket.images} alt="rocket flickr" className="rocket-img" />
        <div className="content px-3 py-5">
          <h3>{ rocket.name }</h3>
          <p>{rocket.description}</p>
          <Button
            type="button"
            variant="primary"
          >
            Reserve Rocket
          </Button>
        </div>
      </div>
    </>
  ))
);

export default Rocket;
