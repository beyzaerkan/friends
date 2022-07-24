import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CardDetail from './Pages/CardDetail/CardDetail';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/:statusCode" element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
