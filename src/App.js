import React from 'react';
import './App.css';
import Header from './Components/Header';
import Contact from './Components/Contact';

import Project from './Components/Projects';
import Technologies from './Components/Technologies';
// import { Particles } from 'react-particles-js';
// import Form from './Components/Form'
// import ParticlesBackground from './Components/ParticlesBackground';
// import Modal from './Components/Modal'
// import Particles from 'react-particles';




function App() {
  return (
    <>
      <div className=''>
{/* <Particles
    params={{
        particles: {
            number: {
                value: 100,
            },
            size: {
                value: 3,
            },
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
            },
        },
    }}
/> */}

         <Header />
   
        <Technologies />
    
         <Project />
              
         {/* <Modal />  */}
  
        <Contact />
    
        
    </div>  
    </>
  );
}

export default App;
