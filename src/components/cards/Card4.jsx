import React from 'react';
import './Card.css';
import Anderson from '../../assets/image/Anderson.jpg';
import Enzo from '../../assets/image/Enzo.jpg';
import Higor from '../../assets/image/Higor.jpg';
import Robson from '../../assets/image/Robson.jpg';
import Lilian from '../../assets/image/Lilian.jpg'

function Card4() {
  return (
    <div className='quarto'>
      <h3>Conheça Nossa Equipe!</h3>
      <div>
        <p>
          Enzo Warner - Scrum Master
        </p>
        <img src={Enzo} alt="Enzo" />
        <p>
          Anderson Tomé - Engenharia de Software
        </p>
        <img src={Anderson} alt="Anderson" />
        <p>
          Robson Gomes - Arquitetura de Redes
        </p>
        <img src={Robson} alt="Robson" />
        <p>
          Higor Felipo - Marketing Digital
        </p>
        <img src={Higor} alt="Higor" />
        <p>
          Lilian Fonseca - Full Stack Developer
        </p>
        <img src={Lilian} alt="Lilian" />
      </div>
      
    </div>
  )
}

export default Card4;
