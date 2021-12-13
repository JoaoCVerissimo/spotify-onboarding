import React from "react";

import homeImage from "../../assets/spotify.jpg"

import "./style.css"


function LoginPage({onClick, isAuthenticated}) {
  return (
    <>
    {isAuthenticated ? 
    <div className="home-container">
      <div className="home-left-child">
        <h3>Bem-vindo</h3>
        <h6>Desloca-te à dashboard para teres acesso aos teus artistas favoritos</h6>
      </div>
      <div className="home-right-child" style={{backgroundImage: `url(${homeImage})`}}/>
    </div>
    :
    <div className="home-container">
      <div className="home-left-child">
        <h3>Bem-vindo</h3>
        <h6>Inicia sessão para teres acesso às tuas músicas e artistas favoritos</h6>
        <button onClick={onClick}>Iniciar sessão</button>
      </div>
      <div className="home-right-child" style={{backgroundImage: `url(${homeImage})`}}/>
    </div>
    }
    
    </>
  );
};

export default LoginPage;
