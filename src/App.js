import './App.css';
import Card from '../src/Components/Card/Card'
import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import  { codes } from './data'
function App() {
  let navigate = useNavigate();
  
  const handleClick = (id) => {
    return navigate(`/${id}`);
  }
  
  return (
    <div className="App">
      <h1>Friends</h1>
      <div className='cards'>
      {
        codes.map(item => {
          return (
            <Card key={item.statusCode} imageUrl={require("../images/" + item.statusCode + ".jpg")} statusCode={item.statusCode} title={item.title} onClick={() => {
              handleClick(item.statusCode);
            }}></Card>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
