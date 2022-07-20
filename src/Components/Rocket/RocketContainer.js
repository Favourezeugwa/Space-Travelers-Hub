import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import RocketList from './RocketList';
import { fetchRocketsData } from '../../redux/rocket/rocketSlice';
import './Rocket.css';

const RocketContainer = () => {
  const rockets = useSelector((state) => state.rocket);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsData());
  }, []);

  return (
    <Container>
      <RocketList rockets={rockets} />
    </Container>
  );
};

export default RocketContainer;
