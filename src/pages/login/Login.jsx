import React from 'react';
import Head from '../../components/head/Head';
import Footer from '../../components/footer/Footer';
import './Login.css';

function Login() {
  return (
    <div>
    <Head />
    <div className='login-box'>
    <h2>Login</h2>
      <form className='login' action="/pagina-processa-dados-do-form" method="post">
        
        <div className='framex'>
          <label for="email">E-mail:</label>
          <input type="email" id="email" />
        </div>
        <div className='framex'>
          <label for="nome">Senha</label>
          <input type="password" id="password" />
        </div>
        <button type='submit'>Enviar</button>
      </form>

    </div>
     
      <Footer />
    </div>
  )
}

export default Login;