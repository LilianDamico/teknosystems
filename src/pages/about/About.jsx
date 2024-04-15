import React from 'react';
import './About.css'
import Card1 from '../../components/cards/Card1';
import Card2 from '../../components/cards/Card2';
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
        <div className='frame-b'><Card3 /></div>
        <div className='frame-c'><Card1 /></div>
        <div className='frame-d'><Card2 /></div> 
      <div/>         
    </div> 
    <Clientes /> 
    <Footer />    
    </div>
  )
}

export default About;
