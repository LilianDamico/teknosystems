import React from 'react';
import './About.css'
import Card1 from '../../components/cards/Card1';
import Card3 from '../../components/cards/Card3';
import Card4 from '../../components/cards/Card4';
import Clientes from '../../components/clientes/Clientes';
import Head from '../../components/head/Head';
import Footer from '../../components/footer/Footer';

const About = () => {
  return (
    <div className='container2'>
      <Head />
      <h2 className='title-about'>Nossa História</h2>
      <div className='conteudo'>
        <div className='frame-a'><Card4 /></div>
        <div className='gamificacao'>
        <h3>Nosso Destaque: Gamificação.</h3>
        <p>
            Gamificação é a aplicação de elementos
            de jogos, como pontos e desafios, 
            em áreas não relacionadas a jogos para 
            motivar e engajar pessoas em atividades específicas.
        </p>
        <p>
            A gamificação no ensino de idiomas pode trazer uma série de benefícios, tais como:           
        </p> 
        <p>
          Engajamento: Torna o aprendizado mais envolvente, incentivando os alunos a 
            participarem ativamente das atividades.
        </p>
        <p>
          Motivação: Os elementos de jogo, como recompensas e desafios, 
            incentivam os alunos a progredirem e a alcançarem objetivos de aprendizado.
        </p>
        <p>
          
          Feedback imediato: Os jogos podem fornecer feedback instantâneo sobre o 
            desempenho do aluno, permitindo que eles identifiquem áreas de melhoria de forma rápida e eficaz.
        </p>
        <p>
          Personalização: A gamificação permite adaptar as atividades de acordo com o nível 
            de proficiência e os interesses individuais dos alunos, tornando o aprendizado mais personalizado e eficiente.
        </p>
        <p>
          Memorização: Jogos que envolvem repetição e prática podem ajudar os alunos a memorizarem 
            vocabulário, gramática e outras estruturas linguísticas de forma mais eficaz.
        </p> 
        <p>
          Memorização: Jogos que envolvem repetição e prática podem ajudar os alunos a memorizarem 
            vocabulário, gramática e outras estruturas linguísticas de forma mais eficaz.
        </p>  
        <p>
          Colaboração: Alguns jogos promovem a cooperação entre os alunos, incentivando 
            a prática da língua em um contexto social.
        </p> 
        <p>
          Em resumo, a gamificação pode tornar o processo de aprendizado de idiomas 
            mais dinâmico, motivador e eficiente, ajudando os alunos a alcançarem seus objetivos 
            linguísticos de forma mais rápida e eficaz.
        </p> 
    </div>
        <div className='frame-c'><Card1 /></div>
        <div className='frame-d'><Card3 /></div> 
      <div/>         
    </div> 
    <Clientes /> 
    <Footer />    
    </div>
  )
}

export default About;
