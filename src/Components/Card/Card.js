import React, { useEffect } from "react";
import PropTypes from 'prop-types';

import './Card.css'

function Card({imageUrl, statusCode, title, onClick}) {
  return (
    
    <div className="card" onClick={onClick}>
      <div className="frame">
        <img className="image" src={imageUrl} alt={statusCode}/>
        <p>{statusCode} - {title}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  imageUrl: PropTypes.string,
  statusCode: PropTypes.number,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  imageUrl: "imageUrl",
  statusCode: 0,
  title: "title"
}


export default Card;