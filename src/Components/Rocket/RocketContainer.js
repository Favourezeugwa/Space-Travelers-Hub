import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import RocketList from './RocketList';
import { fetchRocketsData } from '../../redux/rocket/rocketSlice';
import './Rocket.css';

// to save the API call that was reserved, we use a global variable to keep the API call
let saveReservedAPI = false;

const RocketContainer = () => {
  // declare a global state variable for rocket and Store
  const rockets = useSelector((state) => state.rocket);

  const dispatch = useDispatch();

  useEffect(() => {
    if (saveReservedAPI === false) {
      saveReservedAPI = true;
      dispatch(fetchRocketsData());
    }
  }, []);

  return (
    <Container>
      <RocketList rockets={rockets} />
    </Container>
  );
};

export default RocketContainer;
