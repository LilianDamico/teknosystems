import React from 'react';
import './Contact.css';
import Head from '../../components/head/Head';
import Forms from '../../components/forms/Forms';
import Footer from '../../components/footer/Footer';

function Contact() {
  return (
    <div>
      <Head />
      <div className='page-forms'> 
        <Forms />
      </div>      
      <Footer />
    </div>
  )
}

export default Contact;