import React from 'react';
import Head from '../../components/head/Head';
import Footer from '../../components/footer/Footer';
import './Login.css';

function Login() {
  return (
    <div>
    <Head />
    <div className='login-box'>
      <form className='login' action="/pagina-processa-dados-do-form" method="post">
        <div className='framex'>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" />
        </div>
        <div className='framex'>
          <label for="email">E-mail:</label>
          <input type="email" id="email" />
        </div>
        <button type='submit'>Enviar</button>
      </form>

    </div>
     
      <Footer />
    </div>
  )
}

export default Login;