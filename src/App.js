import React from 'react';
import './App.css';
import Aboutme from './Components/Aboutme';
import Header from './Components/Header';
import Project from './Components/Projects';
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
   
        <Aboutme />
    
         <Project />
              
         {/* <Modal />  */}
  
  
    
        
    </div>  
    </>
  );
}

export default App;
