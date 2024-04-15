import React from 'react';
import './Clientes.css';
import Promec1 from '../../assets/image/Promec.png';
import Mario from '../../assets/image/Mario.jpeg';
import OmniSchool from '../../assets/image/OmniSchool8.png';
import Pompeia from '../../assets/image/Pompeia.jpeg';
import Empada from '../../assets/image/Empada.png';
import Hogwarts from '../../assets/image/Hogwarts.jpeg';
import Osprey from '../../assets/image/Osprey.png';
import Tradicao from '../../assets/image/Tradicao.png';
import Uniao from '../../assets/image/Uniao.png';
import Whirlpool from '../../assets/image/Whirlpool.jpeg';
import Wonka from '../../assets/image/Wonka.png';
import Localiza from '../../assets/image/Localiza.png';

function Clientes() {
  return (
    <div className='clientes'>
      <h3>Nossos Clientes:</h3>
      <div className='promec'>
        <img className='promec1' src={Promec1} alt="Promec" />  
        <div className='info'>
          <h3>PROMEC</h3>      
          <p>
            Desenvolvimento de Sistemas de controle de 
            processos de produção, de contabilidade e 
            Marketing Digital.
          </p>       
        </div>
      </div>
      <div className='frame'>
        <img src={Mario} alt="Mario" />
        <div className='info'>
          <h3>Mario Bros. Manutenção Hidráulica.</h3>
          <p>
            Aplicativos de Treinamento e Capacitação 
            por meio de Gamificação e Marketing Digital.
          </p>
        </div>
      </div>
      <div className='frame'>
        <img src={OmniSchool} alt="OmniSchool" />
        <div className='info'>
          <h3>OmniSchool Escola de idiomas</h3>
          <p>
            Implantação dos Sistemas Administrativos, 
            Aplicativos de Aprendizado de Idiomas por 
            meio de Gamificação, Produção de Conteúdo 
            Audiovisual e Marketing Digital.
          </p>
        </div>
      </div>
      <div className='frame'>
        <img src={Pompeia} alt="Pompeia" />
        <div className='info'>
          <h3>Pompéia Supermercados</h3>
          <p>
            Sistemas de Controle de Estoque 
            integrado ao PDV, Sistemas Administrativos e 
            Marketing Digital.
          </p>
        </div>
      </div>
      <div className='frame'>
        <img src={Empada} alt="Empada" />
        <div className='info'>
          <h3>Empada Santista</h3>
          <p>
            Aplicativo para Gerenciamento de Estoque, Aplicativo para 
            Food Delivery e Marketing Digital.
          </p>
        </div>
      </div>
      <div className='frame'>
        <img src={Hogwarts} alt="Hogwarts" />
        <div className='info'>
          <h3>Escola de Bruxaria de Hogwarts</h3>
          <p>
            Reciclagem do Sistema Administrativo, Modernização 
            de Equipamentos, Aplicativos de Gamificação do Ensino
            e Marketing Digital.          
          </p>
        </div>
      </div>
      <div className='frame'>
        <img src={Osprey} alt="Osprey" />
        <div className='info'>
          <h3>Osprey Terminais Logísticos Multimodais</h3>
          <p>Implantação de TOS - Terminal Operating Systems</p>
        </div>
      </div>
      <div className='frame'>
        <img src={Tradicao} alt="Tradicao" />
        <div className='info'>
          <h3>Pizzaria Tradição</h3>
          <p>
            Aplicativo de Gerenciamento de Estoque integrado ao PDV,
            App Mobile para Food Delivery e Marketing Digital.
          </p>
        </div>
      </div>
      <div className='frame'>
        <img src={Uniao} alt="Uniao" />
        <div className='info'>
          <h3>Açúcar União Sociedade Anônima</h3>
          <p>
            Automação de Linha de Produção da planta de Tarumã/SP, 
            reciclagem de equipamentos e do servidor da empresa.
            Aplicativo de treinamento de pessoal por Gamificação
          </p>
        </div>
      </div>
      <div className='frame'>
        <img src={Whirlpool} alt="Whirlpool" />
        <div className='info'>
          <h3>Whirlpool Sociedade Anônima</h3>
          <p>
            Automação da linha de produção da planta de 
            Joinville/SC.
          </p>
        </div>
      </div>
      <div className='frame'>
        <img src={Wonka} alt="Wonka" />
        <div className='info'>
          <h3>Fábrica de Chocolates Wonka Ltda.</h3>
          <p>
            Modernização de Linha de Produção da planta de Berna, Suiça.
            Treinamento de funcionários por Gamificação.
            Marketing Digital.
          </p>
        </div>
      </div>
      <div className='frame'>
        <img src={Localiza} alt="Localiza" />
        <div className='info'>
          <h3>Localiza Rent a Car Sociedade Anônima</h3>
          <p>
            Modernização do Servidor, Migração para novo Banco de Dados.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Clientes;
