/* eslint-disable max-len */
import React from 'react';
import PropTypes, { Object } from 'prop-types';
import RocketItem from './RocketItem';

const RocketList = (props) => {
  const { rockets } = props;

  return (
    <ul>
      { rockets.map((rocket) => <RocketItem key={rocket.id} rocket={rocket} />)}
    </ul>
  );
};

RocketList.defaultProps = {
  rockets: [],
};

RocketList.propTypes = {
  rockets: PropTypes.instanceOf(Object),
};

export default RocketList;
