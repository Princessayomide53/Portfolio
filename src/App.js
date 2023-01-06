import './App.css';
import Aboutme from './Components/Aboutme';
import Header from './Components/Header';
import Project from './Components/Projects';
import ParticlesBackground from './Components/ParticlesBackground';
// import Form from './Components/Form'
// import Particles from 'react-particles';




function App() {
  return (
    <>
      <div className='Particles'>
      <ParticlesBackground />

         <Header />
   
        <Aboutme />
    
        <Project />
        {/* <Form /> */}
      {/* </ParticlesContainer> */}
    {/* <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
          },
        }}
      /> */}
  
    
        
    </div>  
    </>
  );
}

export default App;
