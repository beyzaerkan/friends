import React, {useState} from "react";
import { useLocation } from 'react-router-dom';

import './CardDetail.css'
function CardDetail () {
  const { state } = useLocation();
  const [code, setCode] = useState(state.item)
  
  return (
    <div className="card-detail">
      <img src={require("../../../images/" + code.statusCode + ".jpg")} alt={code.title} />
    </div>
  )
}

export default CardDetail;