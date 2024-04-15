import React from 'react';
import './Forms.css';

function Forms() {
  return (
    <div className='form'>
        <form action="/pagina-processa-dados-do-form" method="post">
            <div className='framex'>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" />
            </div>
            <div className='framex'>
                <label for="email">E-mail:</label>
                <input type="email" id="email" />
            </div>
            <div className='framex'>
                <label for="msg">Mensagem:</label>
                <textarea id="msg"></textarea>
            </div>
            <button type='submit'>Enviar</button>
        
        </form>      
    </div>
  )
}

export default Forms;
