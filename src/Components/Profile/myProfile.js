import React from 'react';
import { useSelector } from 'react-redux';

import { ListGroup, Container } from 'react-bootstrap';

const MyProfile = () => (
  <Container className="d-flex justify-content-center mt-5">
    <ListGroup className="w-25 me-5">
      <h2>My Mission</h2>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
    </ListGroup>
    <ListGroup className="w-25">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
    </ListGroup>
  </Container>
);

export default MyProfile;
