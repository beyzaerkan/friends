import React from "react";
import PropTypes from 'prop-types';

import './Card.css'


function Card({imageUrl, statusCode, title}) {
  return (
    <div className="card">
      <div className="frame">
        <img className="image" src={imageUrl} alt={statusCode} />
        <p>{statusCode} - {title}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  imageUrl: PropTypes.string,
  statusCode: PropTypes.number,
  title: PropTypes.string
};

Card.defaultProps = {
  imageUrl: "imageUrl",
  statusCode: 0,
  title: "title"
}


export default Card;