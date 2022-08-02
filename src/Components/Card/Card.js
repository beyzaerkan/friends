import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./Card.css";

function Card({ imageUrl, statusCode, title, onClick }) {
  return (
    <div className="card">
      <div className="frame" onClick={onClick}>
        <div className="mat">
          <div className="art">
            <img src={imageUrl} alt={title} />
          </div>
        </div>
      </div>
      <div className="info">
        {statusCode} - {title}
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
  title: "title",
};

export default Card;
