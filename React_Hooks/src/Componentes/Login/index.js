import React, {useState} from 'react';

import like from '.././../assets/imagens/login.jpg';
import deslike from '.././../assets/imagens/logout.jpg';

import './styles.css';

function Login() {

  const [login, setLogin] = useState(true);

  function handleLogin() {
    setLogin(!login);
  }

  return (
      <div id="Login-container">
        {
          login ? 
          <div id="login">
            <h1>Bem vindo Witally!</h1>
            <img src={like} alt="Login efetuado com sucesso"/>
            <button onClick={handleLogin}>Sair</button>
          </div>
         : 
        <div id="login">
          <h1>Faça o login para entrar no sistema.</h1>
          <img src={deslike} alt="Login efetuado com sucesso"/>
          <button onClick={handleLogin}>Entrar</button>
         </div>
       }
      </div>
  )
}

export default Login;