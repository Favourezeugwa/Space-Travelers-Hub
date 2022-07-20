import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const RocketItem = (props) => {
  const { rocket } = props;
  const {
    name, description, images,
  } = rocket;

  return (
    <li className="d-flex my-3">
      <img src={images} alt="rocket flickr" className="rocket-img" />
      <div className="content px-3 py-5">
        <h3>{ name }</h3>
        <p>{description}</p>
        <Button
          type="button"
          variant="primary"
        >
          Reserve Rocket
        </Button>
      </div>
    </li>
  );
};

RocketItem.defaultProps = {
  rocket: {},
  name: '',
  description: '',
  images: '',
};

RocketItem.propTypes = {
  rocket: PropTypes.instanceOf(Object),
  name: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.string,
};

export default RocketItem;
