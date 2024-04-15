import React from 'react';
import './Home.css';
import Head from '../../components/head/Head';
import Footer from '../../components/footer/Footer';


const Home = () => {
  return (
    <div>
      <Head />
      <div className='container-home'>
        <div className='frame1'>
          <h3>Por que investir em infraestrutura de sistemas?</h3>
          <p>
            Investir em infraestrutura de sistemas é essencial 
            para garantir eficiência operacional, escalabilidade, 
            segurança cibernética, resiliência contra falhas e 
            vantagem competitiva. Uma infraestrutura robusta 
            suporta a inovação tecnológica e permite que as 
            empresas atendam às demandas do mercado de 
            forma ágil e confiável.
          </p>
        </div>
        <div class="container">
          <div class="ball"></div>
          <div class="ball"></div>
          <div class="ball"></div>
          <div class="ball"></div>
          <div class="ball"></div>
          <div class="ball"></div>
          <div class="ball"></div>
        </div>
        <div className='frame2'>
          <h3>Você sabe o que é Gamificação?</h3>
          <p>
            Gamificação é a aplicação de elementos de jogos, 
            como pontos e desafios, em áreas não relacionadas
            a jogos para motivar e engajar pessoas em 
            atividades específicas.
          </p>
        </div>
        
        <div className='frame4'>
          <h2>Você está conectado?</h2>
        </div>
        <div className='frame5'>
          <p>
            Na TeknoSystems você encontra tudo o que 
            seu empreendimento necessita!
          </p>
          <p>
            Agende uma visita!
          </p>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;
