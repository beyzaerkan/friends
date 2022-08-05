import React, {useState} from "react";
import { useParams } from 'react-router-dom';
import { findById } from '../../data'

import './CardDetail.css'

function CardDetail () {
  const { statusCode } = useParams();
  const code = findById(statusCode);

  return (
    <div className="card-detail">
      <img src={require("../../../images/" + code.statusCode + ".jpg")} alt={code.title} />
    </div>
  )
}

export default CardDetail;
