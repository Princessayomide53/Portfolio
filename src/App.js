import React from 'react';
import './App.css';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Project from './Components/Projects';
import Technologies from './Components/Technologies';
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";





function App() {
  return (
    <>
      <div className=''>

         <Header />
   
        <Technologies />
    
         <Project />
  
        <Contact />
    <ToastContainer />
        
    </div>  
    </>
  );
}

export default App;
