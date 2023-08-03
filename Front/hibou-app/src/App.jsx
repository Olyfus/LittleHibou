import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Base64 } from 'js-base64';
import logo from './logo.svg';
import Endpoint from './endpoint';
import Name from './name';
import Sale from './sale';
import WebFont from 'webfontloader';
import './App.css';

function isTokenExpired(token) {
  if (token === null) {
    return true;
  }
  try {
    // Décoder le token pour récupérer les données de payload
    const payload = JSON.parse(Base64.decode(token.split(".")[1]));
    // Récupérer la propriété 'exp' qui contient un timestamp
    const expiresAt = payload.exp;
    // Transformer le timestamp en date
    const expirationDate = new Date(expiresAt * 1000);
    // Vérifier si la date d'expiration est supérieure à l'heure actuelle
    return expirationDate < new Date();
  } catch (err) {
    console.error(err);
    return true;
  }
}

function ProtectedRoute( { children } ){
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  if (isTokenExpired(token)){
    return(navigate("/"));
  }
  
  return children;
}

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Noto Sans Hanunoo']
      }
    })
  })
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Endpoint/>}/>
      <Route path='/name' element={<Name/>}/>
      <Route path='/sale' element={<Sale/>}/>
    </Routes>
  </BrowserRouter>  
  );
  
}

export default App;
