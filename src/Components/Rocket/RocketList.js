/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import RocketItem from './RocketItem';

const RocketList = (props) => {
  const { rockets } = props;

  return (
    <ul>
      { rockets.map((rocket) => <RocketItem key={rocket.id} rocket={rocket} />)}
    </ul>
  );
};

RocketList.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.object),
};

export default RocketList;
